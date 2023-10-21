void setup() {
    disableDebug();
}

PinValue letztesSignal = LOW;
PinValue lampe = LOW;

void tick() {
    PinValue signal = readPin(2);

    if (letztesSignal == LOW && signal == HIGH) {
        if (lampe == LOW) {
            writePin(1, HIGH);
            lampe = HIGH;
        } else {
            writePin(1, LOW);
            lampe = LOW;
        }
    }
    
    letztesSignal = signal;
}