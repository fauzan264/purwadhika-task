<!-- 
    Typescript
    TS superset dari JS. Tetapi TS menambahkan fitur berupa static type.

    + Type Safety
    + Dapat mendeteksi error lebih dini

    function Perkalian(num1, num2) {
        return num1 * num2; // 10 * undefined = NaN
    }

    Perkalian(10) NaN
    
    - melakukan running typescript
    npm i -g typescript // akan menginstall secara global
    npm i -g ts-node // akan menginstall secara global
    tsc --init

    - nanti terdapat tsconfig.json
    - uncomment di "rootDir": "./" dan update jadi ./src
    - uncoment di "outDir": "./dist",
-->