const H = 1;
const He = 4;
const Li = 7;
const Be = 9;
const B = 11;
const C = 12;
const N = 14;
const O = 16;
const F = 19;
const Ne = 20;
const Na = 23;
const Mg = 24;
const Al = 27;
const Si = 28;
const P = 31;
const S = 32;
const Cl = 35;
const Ar = 40;
const K = 39;
const Ca = 40;
const Sc = 45;
const Ti = 48;
const V = 51;
const Cr = 52;
const Mn = 55;
const Fe = 56;
const Co = 59;
const Ni = 59;
const Cu = 64;
const Zn = 65;
const Ga = 70;
const Ge = 73;
const As = 75;
const Se = 79;
const Br = 80;
const Kr = 84;
const Rb = 85;
const Sr = 88;
const Y = 89;
const Zr = 91;
const Nb = 93;
const Mo = 96;
const Tc = 98;
const Ru = 101;
const Rh = 103;
const Pd = 106;
const Ag = 108;
const Cd = 112;
const In = 115;
const Sn = 119;
const Sb = 122;
const Te = 128;
const I = 127;
const Xe = 131;
const Cs = 133;
const Ba = 137;
const La = 139;
const Ce = 140;
const Pr = 141;
const Nd = 144;
const Pm = 145;
const Sm = 150;
const Eu = 151;
const Gd = 157;
const Tb = 159;
const Dy = 163;
const Ho = 165;
const Er = 167;
const Tm = 169;
const Yb = 173;
const Lu = 175;
const Hf = 178;
const Ta = 181;
const W = 184;
const Re = 186;
const Os = 190;
const Ir = 192;
const Pt = 195;
const Au = 197;
const Hg = 201;
const Tl = 204;
const Pb = 207;
const Bi = 209;
const Po = 209;
const At = 210;
const Rn = 222;
const Fr = 223;
const Ra = 226;
const Ac = 227;
const Th = 232;
const Pa = 231;
const U = 238;
const Np = 237;
const Pu = 244;
const Am = 243;
const Cm = 247;
const Bk = 247;
const Cf = 251;
const Es = 252;
const Fm = 257;
const Md = 258;
const No = 259;
const Lr = 262;
const Rf = 267;
const Db = 268;
const Sg = 271;
const Bh = 270;
const Hs = 277;
const Mt = 278;
const Ds = 281;
const Rg = 281;
const Cn = 285;
const Nh = 256;
const Fl = 289;
const Mc = 289;
const Lv = 292;
const Ts = 294;
const Og = 294;

const pierwiastekInput = document.getElementById("pierwiastekInput");
const zwiazekInput = document.getElementById("zwiazekInput");

const spanMasaPierwiastka = document.getElementById("masa-pierwiastka");
const spanMasaZwiazku = document.getElementById("masa-zwiazku");

const spanWynik = document.getElementById("wynik");

function oblicz() {
  wynik = (masaPierwiastka * 100) / masaZwiazku;
  if (typeof wynik === "number") {
    spanWynik.textContent = wynik;
  } else {
    spanWynik.textContent = "?";
  }
}

let masaPierwiastka = eval(pierwiastekInput.value);

function defineMasaPierwiastka() {
  masaPierwiastka = eval(pierwiastekInput.value);
  if (typeof masaPierwiastka === "number") {
    spanMasaPierwiastka.textContent = masaPierwiastka + " g/mol";
    oblicz();
  } else {
    spanMasaPierwiastka.textContent = "masa pierwiastka";
  }
}

pierwiastekInput.addEventListener("keyup", defineMasaPierwiastka);

let masaZwiazku = eval(zwiazekInput.value);

function defineMasaZwiazku() {
  masaZwiazku = eval(zwiazekInput.value);
  if (typeof masaZwiazku === "number") {
    spanMasaZwiazku.textContent = masaZwiazku + " g/mol";
    oblicz();
  } else {
    spanMasaZwiazku.textContent = "masa związku";
  }
}

zwiazekInput.addEventListener("keyup", defineMasaZwiazku);
