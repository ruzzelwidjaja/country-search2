import { proxy } from 'valtio';

export const state = proxy ({
    intro: true,
    color: '#7a66ee',
});