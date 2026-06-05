
export interface TranscriptionEntry {
  text: string;
  sender: 'user' | 'sculpture';
  timestamp: number;
}

export enum SculptureState {
  IDLE = 'IDLE',
  LISTENING = 'LISTENING',
  SPEAKING = 'SPEAKING',
  OFF = 'OFF'
}
