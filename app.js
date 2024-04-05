const sentenceEl = document.getElementById("sentence");
const updateBtn = document.getElementById("updateBtn");

const cumleler = [
  " 1 = Gönlüm Buna Razı Olmadı\n\nEşeği ile kasabaya alışverişe giden Nasreddin Hoca; kitap, elma, limon gibi birçok ağır şey almış. Aldıklarını kocaman bir çuvala yerleştirmiş. Çuvalı da sırtına alıp eşeğine binmiş.\n\nYolda giderken Hoca’yı gören köylüler:\n\n– Ey Hoca, çuvalı niye kendi sırtına aldın?, diye sormuşlar.\n\nHoca:\n\n– Ne yapayım? Zavallı hayvan zaten beni taşıyor, çuvalı da ona taşıtmaya gönlüm razı olmadı, demiş.",

  " 2 = Vasiyet Etmiş\n\nNasreddin Hoca bir gün evde otururlarken karısına:\n\n– Hanım iyi dinle, size vasiyetimdir. Ben öldüğümde beni baş aşağı gömün, demiş.\n\nKarısı şaşırmış:\n\n– Hoca o ne demek? Neden böyle bir şey istiyorsun, demiş.\n\nHoca ciddi bir şekilde:\n\n– Yarın öbür gün kıyamet koparsa her şey ters düz olacak. O zaman ben de düz olarak ayağa kalkabilirim, demiş.",

  " 3 = Parayı Veren Düdüğü Çalar\n\nÇocuklar, pazara gelen Nasreddin Hoca'nın etrafını sarmış. “Hoca, bana düdük al!” demiş biri. “Bana da, bana da!” demiş bir diğeri.\n\nDiğerleri de sırayla:\n\n– Ben de düdük isterim!\n\n– Bir tane de bana!, demişler.\n\nİçlerinden sadece biri Nasreddin Hoca’ya düdük parası vermiş. Hoca, parayı alıp pazara gitmiş.\n\nHoca, akşam pazardan dönünce çocuklar etrafını sarmış. Her biri düdüğünü istemiş. Cebinden bir düdük çıkaran hoca, parayı veren çocuğa vermiş.\n\nDiğer çocuklar hep bir ağızdan bağırmış:\n\n– Hani bizim düdüğümüz?\n\nNasrettin Hoca gülerek,\n\n– Parayı veren düdüğü çalar, demiş.",

  " 4 = Onu Kendisi Sanmış\n\nNasreddin Hoca bir gün yolda giderken bir adamla karşılaşmış. Adamla sohbet etmeye başlamışlar. Bir saat havadan sudan konuştuktan sonra Hoca:\n\n– Kusura bakma arkadaş. Ben seni tanıyamadım, adın neydi?, diye sormuş.\n\nAdamcağız çok şaşırmış:\n\n– Madem beni tanımadın, neden benimle bir saattir sohbet ediyorsun?, demiş.\n\nNasreddin Hoca:\n\n– Kıyafetlerin benimkine çok benziyordu. Ben de seni ben sandım, demiş.",

  "5 = Akıl Sır Ermiyor\n\nNasreddin Hoca bir gün yolda yürürken iki yüz akçe parasını kaybetmiş. Kaybettiği parasını bulamayan ve çok üzülen Hoca, “ne olur bulunsun” diye dua etmiş.\n\nAynı zamanda yaşadığı şehrin en zenginlerinden biri uzak diyarlarda bir yerde çıktığı gemi yolculuğunda kötü bir fırtınaya yakalanmış ve “Eğer kurtulursam Nasreddin Hoca’ya iki yüz akçe para vereceğim” diye adak adamış hemen.\n\nKötü fırtınadan kurtulan adam hemen gelip bu parayı Hoca’ya vermiş. Hoca şaşırmış ve:\n\n– Ey Allah'ım sağ ol. Bu ne dolambaçlı yolmuş, ben parayı ben nerede yitirdim, nerden çıktı. Gerçekten de akıl sır ermiyor, demiş.",
];

updateBtn.addEventListener("click", function () {
  const rastgeleIndis = Math.floor(Math.random() * cumleler.length);
  const rastgeleCumle = cumleler[rastgeleIndis];
  sentenceEl.textContent = rastgeleCumle;
});

// blur efekti kodları

const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(bluring, 30)

function bluring() {
  load++

  if (load > 99) {
    clearInterval(int)
  }
  //console.log(load)

  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}