first_number = 55
second_number = 105
third_number = 125

for i in range(1, 100):
    if first_number % i == 0 and second_number % i == 0 and third_number % i == 0:
        print("#", i)
        print("First =", first_number / i)
        print("Second =", second_number / i)
        print("Third =", third_number / i)