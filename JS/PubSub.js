class PubSub {
    constructor() {
        this.events = {};
    }

    subscribe(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [callback];
        } else {
            this.events[event].push(callback);
        }
    }

    publish(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(callback => callback(data));
        }
    }

    unsubscribe(event, callback) {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(cb => cb !== callback);
        }
    }

    unsubscribeAll(event) {
        if (this.events[event]) {
            this.events[event] = [];
        }
    }

    getEvents() {
        console.log(this.events);
    }
}

let pubSub = new PubSub();

const component1 = {
    render(data) {
        console.log("Component 1 rendered with data:", data);
    }
};

const component2 = {
    render(data) {
        console.log("Component 2 rendered with data:", data);
    }
}

function updateData(newData) {
    console.log("Data updated:", newData);
    pubSub.publish("dataUpdated", newData);
}

pubSub.subscribe("dataUpdated", component1.render);
pubSub.subscribe("dataUpdated", component2.render);
updateData("New Data 1"); // pubSub.publish("dataUpdated", "New Data 1");
// Data updated: New Data 1
// Component 1 rendered with data: New Data 1
// Component 2 rendered with data: New Data 1

updateData("New Data 2");
// Data updated: New Data 2
// Component 1 rendered with data: New Data 2
// Component 2 rendered with data: New Data 2

pubSub.unsubscribe("dataUpdated", component1.render);
updateData("New Data 3");
// Data updated: New Data 3
// Component 2 rendered with data: New Data 3

pubSub.unsubscribeAll("dataUpdated");
updateData("New Data 4");
// Data updated: New Data 4