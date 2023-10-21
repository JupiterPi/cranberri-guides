void setup() {
    disableDebug();
}

void tick() {
    if (readPin(1) == HIGH) {
        writePin(3, HIGH);
    }
    if (readPin(2) == HIGH) {
        writePin(3, LOW);
    }
}