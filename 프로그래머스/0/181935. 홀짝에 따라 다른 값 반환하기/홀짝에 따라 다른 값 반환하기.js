const solution = (n) => n % 2
                        ? (n + 1) ** 2 / 4
                        : 2 * (n /= 2) * (n + 1) * (2 * n + 1) / 3;