export function sortTeamByPriority(team) {
  return team.sort((a, b) => a.priority - b.priority)
}
