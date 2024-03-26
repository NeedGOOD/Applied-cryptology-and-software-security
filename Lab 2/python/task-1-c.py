columns = int(input("Enter number of columns: "))
ciphertext = input("Enter ciphertext: ")
length = len(ciphertext)

rows = length // columns

index = 0

print()
print("+---" * columns + "+")
for i in range(1, columns + 1):
    print(f"| {i}", end=" ")
print("|")
print("+---" * columns + "+")

for i in range(rows):
    print("|", end=" ")
    for j in range(columns):
        if index < length:
            print(ciphertext[index], "|", end=" ")
            index += 1
        else:
            print("   |", end=" ")
    print()
    print("+---" * columns + "+")