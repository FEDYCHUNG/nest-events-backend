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

@Controller('/events')
export class EventController {
    @Get()
    findAll() {
        return [
            { id: 1, name: 'First Event' },
            { id: 2, name: 'Second Event' },
        ];
    }

    @Get(':id')
    findOne(@Param('id') id) {
        return id;
    }

    @Post()
    create(@Body() input) {
        return input;
    }

    @Patch(':id')
    udpate(@Param('id') id, @Body() input) {
        return input;
    }

    @Delete(':id')
    @HttpCode(204)
    remove(@Param('id') id) {}
}
