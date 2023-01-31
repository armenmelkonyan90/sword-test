export class ActivityLogsResponseDTO {
  date: string;
  items: Item[];
}

class Item {
  ipAddress: string;
  location: string;
  device: string;
  osVersion: string;
  id: number;
  description: string;
  createdAt: Date;
}
