import { distinction, distinctionOption } from "../rules/distinction";
import { power } from "../rules/powers";

export const powers = {
  wellActually: power({ name: 'Well Actually '}),
  percieveTime: power({ name: 'Percieve Time' }),
  slowOrSpeed:  power({ name: 'Slow or Speed Up Time' }),
  teleport:     power({ name: 'Teleport' }),
  ageing:       power({ name: 'Age Objects' }),
}

export const distinctions = {
  manipulatesTime: distinction({ name: 'ManipulatesTime', options: [
    distinctionOption({ level: 1, power: powers.percieveTime.id }),
    distinctionOption({ level: 2, power: powers.slowOrSpeed.id }),
    distinctionOption({ level: 3, power: powers.slowOrSpeed.id }),
    distinctionOption({ level: 4, power: powers.slowOrSpeed.id }),
    distinctionOption({ level: 5, power: powers.slowOrSpeed.id }),
  ] })
};

