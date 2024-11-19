#include <Arduino.h>
#include <WiFi.h>
WiFiClient client;

const char *ssid = "MakerSpace - UniFi";
const char *password = "unimakers";

void setup()
{
  Serial.begin(115200);
  delay(1000);

  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  Serial.println("\nConnecting");

  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    delay(100);
  }
  Serial.println("\nConnected to the WiFi network");
  Serial.print("Local ESP32 IP: ");
  Serial.println(WiFi.localIP());
}

void loop()
{
  if (!client.connect("172.16.4.40", 36969))
  {
    Serial.println("Connection to host failed");
    delay(1000);
    return;
  }
  client.print("Hello from ESP32!\n");
  client.stop();
  delay(500);
}
