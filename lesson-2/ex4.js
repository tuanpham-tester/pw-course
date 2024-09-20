let chieucao = 167;
cannanglytuong = (((chieucao % 100) * 9) / 10);
cannangtoida = (chieucao % 100);
cannangtoithieu = (((chieucao % 100) * 8) / 10);
console.log("Cân nặng lý tưởng: ", cannanglytuong + "  Cân nặng tối đa: ", cannangtoida + "  Cân nặng tối thiểu: ", cannangtoithieu);
