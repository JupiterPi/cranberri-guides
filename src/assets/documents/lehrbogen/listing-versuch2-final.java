void setup() {
    disableDebug();
}

int tick = 0;

void tick() {
    if (tick % 20 == 0) {
        writePin(1, HIGH);
    }

    if (tick % 20 == 10) {
        writePin(1, LOW);
    }

    tick = tick + 1;
}