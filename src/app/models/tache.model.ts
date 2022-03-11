export interface Tache{
    id?: number,
    intitule: string,
    description: string,
    dateCreation: Date,
    deadline: Date,
    dateExecution?: Date,
    priorite: 'basse' | 'moyenne' | 'haute'
}