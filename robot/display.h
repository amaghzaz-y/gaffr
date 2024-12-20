#pragma once
#include <lcd.h>
#include <pins.h>

class Display
{
private:
	LiquidCrystal_I2C lcd;

public:
	Display();
	void setup();
	void Show(String row0, String row1, String row2, String row3);
	void Test();
};