import { RoomHasSchedule } from '../../../../entities/RoomHasSchedule';
import { IRoomHasScheduleRepository } from '../../IRoomHasScheduleRepository';

class DeleteRoomHasScheduleUseCase {
    constructor(
        private roomHasScheduleRepository: IRoomHasScheduleRepository
    ) {}
    
    async execute(id: string): Promise<RoomHasSchedule>{
        const roomHasSchedule:RoomHasSchedule = await this.roomHasScheduleRepository.findById(id);

        if(!roomHasSchedule) {
            throw new Error('Sala não existe');
        }

        await this.roomHasScheduleRepository.delete(roomHasSchedule);

        return roomHasSchedule;
    }
}
export { DeleteRoomHasScheduleUseCase };