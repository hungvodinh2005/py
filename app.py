from decimal import*
x=Decimal("3.456").quantize(Decimal("0.01"),rounding=ROUND_HALF_UP)
print(x)