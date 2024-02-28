import generalClinic from '../cardsTreatments/general-clinic.svg';
import orthodontics from '../cardsTreatments/orthodontics.svg';
import endodontics from '../cardsTreatments/endodontics.svg';
import implantology from '../cardsTreatments/implantology.svg';
import periodontics from '../cardsTreatments/periodontics.svg';
import pediatricDentistry from '../cardsTreatments/pediatric-dentistry.svg';

export const typesOfTreatments = {
  'clinica-geral': {
    image: generalClinic,
    title: 'Clínica Geral',
    description: 'Restauração dos dentes, limpeza dentária, instalação de lentes de contato, clareamento, entre outras correções necessárias para a harmonização do sorriso.',
  },

  ortodontia: {
    image: orthodontics,
    title: 'Ortodontia',
    description: 'A ortodontia convencional sempre será uma forma de alinhar nosso sorriso! Trabalhamos com aparelhos ortodonticos metálicos, autoligados, cerâmicos e de safira e ortodontia infantil.',
  },

  endodontia: {
    image: endodontics,
    title: 'Endodontia',
    description: 'Conhecido também como Tratamento de Canal, cuida da parte interna do dente. Trabalhamos com instrumentos modernos que permitem que o tratamento seja realizado em apenas uma sessão.',
  },

  implantodontia: {
    image: implantology,
    title: 'Implantodontia',
    description: 'Substituição dos dentes ausentes ou comprometidos por protéses de alta tecnologia que utilizam parafusos de titânio, mantendo a aparência natural do sorriso.',
  },

  periodontia: {
    image: periodontics,
    title: 'Periodontia',
    description: 'Cuida da gengiva e as demais regiões de suporte do dente. Também trabalhamos com a estética da gengiva, fazendo procedimentos como a gengivoplastia (remoção de parte da gengiva para diminuir o sorriso gengival).'
  },

  odontopediatria: {
    image: pediatricDentistry,
    title: 'Odontopediatria',
    description: 'Cuida da saúde bucal das crianças. Tem papel importante no desenvolvimento da fala, da mastigação, além de prevenir cáries e outras alterações, evitando maiores problemas na vida adulta.',
  },
};
