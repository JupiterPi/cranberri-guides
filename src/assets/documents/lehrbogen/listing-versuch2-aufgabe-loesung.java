void setup() {
    disableDebug();
}

int tick = 0;

void tick() {
    if (tick % 60 == 0) {
        writePin(1, HIGH);
    }

    if (tick % 60 == 20) {
        writePin(1, LOW);
    }

    tick = tick + 1;
}