import { controls } from "./elements";

export function registerControls() {
    controls.addEventListener('click', (e) => {
        const action = e.target.dataset.action

        if(action === undefined) {
            return
        }

        console.log(action)
    })
}