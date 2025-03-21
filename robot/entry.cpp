#include <Arduino.h>
#include <polarvec.h>
#include <lidar.h>
#include <strategy.h>

Strategy strategy;
Lidar lidar;

bool lidarStatus = false;
Point2D currentPoint = Point2D(0, 0);

void FullStop()
{
    strategy.stop();
}
Ticker ticker(FullStop,
              95500, 0, MILLIS);

void LidarTask(void *pvParameters)
{
    int count = 0;
    for (;;)
    {
        currentPoint = strategy.getCurrentPoint();
        if (lidar.Task(&currentPoint))
            count++;
        if (count > 15)
        {
            lidarStatus = true;
            count = 0;
        }
        else
        {
            lidarStatus = false;
        }
        ticker.update();
    }
}

void setup()
{
    Serial.begin(9600);
    lidar.setup();
    lidar.setMaxRange(450); // 300
    lidar.setRadius(360);
    lidar.setAngle(180);
    strategy.setup();
    xTaskCreatePinnedToCore(LidarTask, "lidarTask", 10000, NULL, 0, NULL, 0);
}

void loop()
{
    strategy.Initiation();
    strategy.Ready();
    ticker.start();
    strategy.display.Show("SCORE", "35", "", "");
    strategy.start(&lidarStatus);
    strategy.display.Show("SCORE", "35", "", "");
    while (1)
    {
        strategy.neopixel.pride();
        delay(1000);
        strategy.neopixel.changeColor(0);
        delay(1000);
        strategy.neopixel.changeColor(3);
        delay(1000);
    }
}