import * as carnelian from 'carnelian'

export function guid() {
    return '_' + Math.random().toString(36).substr(2, 9)
}
