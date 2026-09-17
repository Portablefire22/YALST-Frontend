export class GameQueueDto {
  queueId: number;
  map: string;
  description: string;
  notes: string | null;

  constructor(queueId: number, map: string, description: string, notes: string | null) {
    this.queueId = queueId;
    this.map = map;
    this.description = description;
    this.notes = notes;
  }
}
