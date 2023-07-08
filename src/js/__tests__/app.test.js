import Character from '../app';
import Team from '../app';

test('Check error: Персонаж уже существует в команде', () => {
  expect(() => {
    const team = new Team();
    const character1 = new Character('Andy', 'Daemon');
    const character2 = new Character('Tim', 'Daemon');

    team.add(character1);
    team.add(character2);
    team.add(character2);
  }).toThrow('Персонаж уже существует в команде');
});

test('Test multiple character additions', () => {
  const team = new Team();
  const character1 = new Character('Andy', 'Daemon');
  const character2 = new Character('Tim', 'Daemon');
  const character3 = new Character('Serg', 'Daemon');

  team.addAll([character1, character2, character3]);

  expect(team.members.size).toBe(3);
});

test('Checking method toArray', () => {
  const team = new Team();
  const character1 = new Character('Andy', 'Daemon');
  const character2 = new Character('Tim', 'Daemon');
  const character3 = new Character('Serg', 'Daemon');

  team.addAll([character1, character2, character3]);

  expect(team.toArray()).toEqual([character1, character2, character3]);
});
