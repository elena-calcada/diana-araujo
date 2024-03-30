import endodontics from '../../public/images/cardsTreatments/endodontics.svg';
import generalClinic from '../../public/images/cardsTreatments/general-clinic.svg';
import implantology from '../../public/images/cardsTreatments/implantology.svg';
import orthodontics from '../../public/images/cardsTreatments/orthodontics.svg';
import pediatricDentistry from '../../public/images/cardsTreatments/pediatric-dentistry.svg';
import periodontics from '../../public/images/cardsTreatments/periodontics.svg';

export const typesOfTreatments = {
  'clinica-geral': {
    image: generalClinic,
    alt: "O desenho mostra um único dente sendo examinado com uma lupa",
    title: 'Clínica Geral',
    description: 'Restauração dos dentes, limpeza dentária, instalação de lentes de contato, clareamento, entre outras correções necessárias para a harmonização do sorriso.',
  },

  ortodontia: {
    image: orthodontics,
    alt: "O desenho mostra um único dente com aparelho nele",
    title: 'Ortodontia',
    description: 'A ortodontia convencional sempre será uma forma de alinhar nosso sorriso! Trabalhamos com aparelhos ortodonticos metálicos, autoligados, cerâmicos e de safira e ortodontia infantil.',
  },

  endodontia: {
    image: endodontics,
    alt: "O desenho mostra um único dente em uma simulação de tratamento de canal",
    title: 'Endodontia',
    description: 'Conhecido também como Tratamento de Canal, cuida da parte interna do dente. Trabalhamos com instrumentos modernos que permitem que o tratamento seja realizado em apenas uma sessão.',
  },

  implantodontia: {
    image: implantology,
    alt: "O desenho mostra uma simulação de implante dentário",
    title: 'Implantodontia',
    description: 'Substituição dos dentes ausentes ou comprometidos por protéses de alta tecnologia que utilizam parafusos de titânio, mantendo a aparência natural do sorriso.',
  },

  periodontia: {
    image: periodontics,
    alt: "O desenho de um único dente destacando a gengiva em volta dele",
    title: 'Periodontia',
    description: 'Cuida da gengiva e das demais regiões de suporte do dente. Também trabalhamos com a estética da gengiva, fazendo procedimentos como a gengivoplastia (remoção de parte da gengiva para diminuir o sorriso gengival).'
  },

  odontopediatria: {
    image: pediatricDentistry,
    alt: "O desenho mostra um único dente sorrindo enquanto é escovado",
    title: 'Odontopediatria',
    description: 'Cuida da saúde bucal das crianças. Tem papel importante no desenvolvimento da fala, da mastigação, além de prevenir cáries e outras alterações, evitando maiores problemas na vida adulta.',
  },
};
