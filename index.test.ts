import { findMostLikelyResults, getUniqueCompetitors, sortSet } from './index';

describe('findMostLikelyResults', () => {
  it('should return an error message if numberOfResultsToReturn is less than 1', () => {
    const result = findMostLikelyResults([], 0);
    expect(result).toBe('You should pick at least one result');
  });

  it('should return a string of formatted results', () => {
    const eventList = [{        
        start_date: '2022-01-01T00:00:00Z',        
        competitors: [{ name: 'Team A', country: 'USA' }, { name: 'Team B', country: 'Canada' }],
        venue: { name: 'Stadium A' },
        probability_home_team_winner: 0.6,
        probability_away_team_winner: 0.3,
        probability_draw: 0.1,
      },
      {
        start_date: '2022-01-02T00:00:00Z',
        competitors: [
          { name: 'Team C', country: 'Mexico' },
          { name: 'Team D', country: 'Brazil' },
        ],
        venue: { name: 'Stadium B' },
        probability_home_team_winner: 0.4,
        probability_away_team_winner: 0.5,
        probability_draw: 0.1,
      },
    ];
    const result = findMostLikelyResults(eventList, 2);
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
  });
});
describe('getUniqueCompetitors', ()=> {
    it('should return a set of unique competitors', ()=> {
        const duplicatedCompetitorsInEvents = [
            {"competitors":[{"name": 'Team A'}, {"name": 'Team B'}]},
            {"competitors":[{"name": 'Team B'}, {"name": 'Team C'}]},
            {"competitors":[{"name": 'Team A'}, {"name": 'Team C'}]}]
        const result = getUniqueCompetitors(duplicatedCompetitorsInEvents);
        //set should guarantee unique results
        expect(result.size).toBe(3);
    });
});
describe('sortSet', ()=> {
    it('should return a sorted set of strings', ()=> {
        const unsortedSet = new Set<string>();
        unsortedSet.add('Team C');
        unsortedSet.add('Team F');
        unsortedSet.add('Team A');
        unsortedSet.add('Team B');
        const result = [...sortSet(unsortedSet)];
        expect(result[0]).toBe('Team A');
        expect(result[3]).toBe('Team F');
    })
})