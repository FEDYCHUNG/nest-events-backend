import {
    Controller,
    Get,
    Post,
    Patch,
    Delete,
    Param,
    Body,
    HttpCode,
} from '@nestjs/common';
import { CreateEventDto } from './create-event.dto';
import { UpdateEventDto } from './update-event.dto';
import { Event } from './event.entity';

@Controller('/events')
export class EventController {
    private events: Event[] = [];

    @Get()
    findAll() {
        return this.events;
        // return [
        //     { id: 1, name: 'First Event' },
        //     { id: 2, name: 'Second Event' },
        // ];
    }

    @Get(':id')
    findOne(@Param('id') id) {
        // return id;

        const event = this.events.find((event) => event.id === parseInt(id));
    }

    @Post()
    create(@Body() input: CreateEventDto) {
        // return input;

        const event = {
            ...input,
            when: new Date(input.when),
            id: this.events.length + 1,
        };

        this.events.push(event);
        return event;
    }

    @Patch(':id')
    udpate(@Param('id') id, @Body() input: UpdateEventDto) {
        // return input;
        const index = this.events.findIndex(
            (event) => event.id === parseInt(id),
        );

        this.events[index] = {
            ...this.events[index],
            ...input,
            when: input.when ? new Date(input.when) : this.events[index].when,
        };

        return this.events[index];
    }

    @Delete(':id')
    @HttpCode(204)
    remove(@Param('id') id) {
        this.events = this.events.filter((event) => event.id === parseInt(id));
    }
}
