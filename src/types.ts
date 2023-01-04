export enum TargetType {
  boyfriend = 'boyfriend',
  girlfriend = 'girlfriend',
}

export const ThemeColor = new Map<TargetType, string>([
  [TargetType.boyfriend, '#0095d9'],
  [TargetType.girlfriend, '#e9546b'],
])
