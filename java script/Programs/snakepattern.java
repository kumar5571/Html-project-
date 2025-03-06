import java.util.Scanner;

class snakepattern {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a size: ");
        int n = sc.nextInt();

        for (int i = 1; i <= n; i++) {
            if (i % n / 2 != 0) {
                int x = ((i - 1) * n) + 1;
                for (int j = 1; j <= n; j++) {
                    System.out.print(x + " ");
                    x++;
                }
            } else {
                int y = (i * n) - (n - 1);
                for (int j = 1; j <= n; j++) {
                    System.out.print(y + " ");
                    y++;
                }
            }
            System.out.println();
        }
        sc.close();

    }

}