import {Crew} from './crew';
import {Cue} from './cue';

export class Show {
    id: number;
    name?: string;
    description?: string;
    date?: number;
    crew?: Crew[];
    cue?: Cue[];
}