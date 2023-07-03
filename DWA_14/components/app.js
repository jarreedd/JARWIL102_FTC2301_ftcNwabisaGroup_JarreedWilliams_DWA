// @ts-check

import { LitElement, html } from "../libs/lit-html.js";

class Count extends LitElement {
    static properties = {
        count: { type: Number },
        state: { type: String },
        message: {type: String}
    };
      
    constructor() {
        super();
        /**
         * @typedef {'Normal' | 'Minimum Reached' | 'Maximum Reached'} State
         */

        /**
         * @type {State}
         */
        this.state = 'Normal'

        /**
         * @type {Number}
         */
        this.count = 0;

        this.message = this.state
    }
    
    increase() {
        if (this.count >= 20) {
            this.state = 'Maximum Reached'
            console.log(`state: ${this.state}\ncount: ${this.count}`)
        } else {
            this.count += 1
        }
    }
      
    decrease() {
        if (this.count <= -20) {
            this.state = 'Minimum Reached'
            console.log(`state: ${this.state}\ncount: ${this.count}`)
        } else {
            this.count -= 1
        }
    }
      
    reset() {
        this.count = 0;
        this.state = 'Normal'
        console.log(`state: ${this.state}\ncount: ${this.count}`)
    }



    render() {
        return html`
            <div>
                <input class="counter-value" readonly value=${this.count}></input>
                <button class="counter__btn sub" @click=${this.decrease}>-</button>
                <button class="counter__btn add" @click=${this.increase}>+</button>

                <button class="counter__btn reset" @click=${this.reset}>Reset</button>

                <dialog class="alert-overview">
                    <strong>${this.message}</strong>
                </dialog>
            </div>
        `         
        
    }
}

customElements.define('count-div', Count)