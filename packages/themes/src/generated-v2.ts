type Theme = {
  color1: string;
  color2: string;
  color3: string;
  color4: string;
  color5: string;
  color6: string;
  color7: string;
  color8: string;
  color9: string;
  color10: string;
  color11: string;
  color12: string;
  background: string;
  backgroundHover: string;
  backgroundPress: string;
  backgroundFocus: string;
  backgroundStrong: string;
  backgroundTransparent: string;
  color: string;
  colorHover: string;
  colorPress: string;
  colorFocus: string;
  colorTransparent: string;
  borderColor: string;
  borderColorHover: string;
  borderColorFocus: string;
  borderColorPress: string;
  placeholderColor: string;
  blue1: string;
  blue2: string;
  blue3: string;
  blue4: string;
  blue5: string;
  blue6: string;
  blue7: string;
  blue8: string;
  blue9: string;
  blue10: string;
  blue11: string;
  blue12: string;
  gray1: string;
  gray2: string;
  gray3: string;
  gray4: string;
  gray5: string;
  gray6: string;
  gray7: string;
  gray8: string;
  gray9: string;
  gray10: string;
  gray11: string;
  gray12: string;
  green1: string;
  green2: string;
  green3: string;
  green4: string;
  green5: string;
  green6: string;
  green7: string;
  green8: string;
  green9: string;
  green10: string;
  green11: string;
  green12: string;
  orange1: string;
  orange2: string;
  orange3: string;
  orange4: string;
  orange5: string;
  orange6: string;
  orange7: string;
  orange8: string;
  orange9: string;
  orange10: string;
  orange11: string;
  orange12: string;
  pink1: string;
  pink2: string;
  pink3: string;
  pink4: string;
  pink5: string;
  pink6: string;
  pink7: string;
  pink8: string;
  pink9: string;
  pink10: string;
  pink11: string;
  pink12: string;
  purple1: string;
  purple2: string;
  purple3: string;
  purple4: string;
  purple5: string;
  purple6: string;
  purple7: string;
  purple8: string;
  purple9: string;
  purple10: string;
  purple11: string;
  purple12: string;
  red1: string;
  red2: string;
  red3: string;
  red4: string;
  red5: string;
  red6: string;
  red7: string;
  red8: string;
  red9: string;
  red10: string;
  red11: string;
  red12: string;
  yellow1: string;
  yellow2: string;
  yellow3: string;
  yellow4: string;
  yellow5: string;
  yellow6: string;
  yellow7: string;
  yellow8: string;
  yellow9: string;
  yellow10: string;
  yellow11: string;
  yellow12: string;
  shadowColor: string;
  shadowColorHover: string;
  shadowColorPress: string;
  shadowColorFocus: string;

}

function t(a) {
  let res: Record<string, string> = {}
  for (const [ki, vi] of a) {
    // @ts-ignore
    res[ks[ki]] = vs[vi]
  }
  return res
}
const vs = [
  '#fff',
  '#f8f8f8',
  'hsl(0, 0%, 96.3%)',
  'hsl(0, 0%, 94.1%)',
  'hsl(0, 0%, 92.0%)',
  'hsl(0, 0%, 90.0%)',
  'hsl(0, 0%, 88.5%)',
  'hsl(0, 0%, 81.0%)',
  'hsl(0, 0%, 56.1%)',
  'hsl(0, 0%, 50.3%)',
  'hsl(0, 0%, 42.5%)',
  'hsl(0, 0%, 9.0%)',
  'rgba(255,255,255,0)',
  'rgba(10,10,10,0)',
  'hsl(206, 100%, 99.2%)',
  'hsl(210, 100%, 98.0%)',
  'hsl(209, 100%, 96.5%)',
  'hsl(210, 98.8%, 94.0%)',
  'hsl(209, 95.0%, 90.1%)',
  'hsl(209, 81.2%, 84.5%)',
  'hsl(208, 77.5%, 76.9%)',
  'hsl(206, 81.9%, 65.3%)',
  'hsl(206, 100%, 50.0%)',
  'hsl(208, 100%, 47.3%)',
  'hsl(211, 100%, 43.2%)',
  'hsl(211, 100%, 15.0%)',
  'hsl(0, 0%, 99.0%)',
  'hsl(0, 0%, 97.3%)',
  'hsl(0, 0%, 95.1%)',
  'hsl(0, 0%, 93.0%)',
  'hsl(0, 0%, 90.9%)',
  'hsl(0, 0%, 88.7%)',
  'hsl(0, 0%, 85.8%)',
  'hsl(0, 0%, 78.0%)',
  'hsl(0, 0%, 52.3%)',
  'hsl(0, 0%, 43.5%)',
  'hsl(136, 50.0%, 98.9%)',
  'hsl(138, 62.5%, 96.9%)',
  'hsl(139, 55.2%, 94.5%)',
  'hsl(140, 48.7%, 91.0%)',
  'hsl(141, 43.7%, 86.0%)',
  'hsl(143, 40.3%, 79.0%)',
  'hsl(146, 38.5%, 69.0%)',
  'hsl(151, 40.2%, 54.1%)',
  'hsl(151, 55.0%, 41.5%)',
  'hsl(152, 57.5%, 37.6%)',
  'hsl(153, 67.0%, 28.5%)',
  'hsl(155, 40.0%, 14.0%)',
  'hsl(24, 70.0%, 99.0%)',
  'hsl(24, 83.3%, 97.6%)',
  'hsl(24, 100%, 95.3%)',
  'hsl(25, 100%, 92.2%)',
  'hsl(25, 100%, 88.2%)',
  'hsl(25, 100%, 82.8%)',
  'hsl(24, 100%, 75.3%)',
  'hsl(24, 94.5%, 64.3%)',
  'hsl(24, 94.0%, 50.0%)',
  'hsl(24, 100%, 46.5%)',
  'hsl(24, 100%, 37.0%)',
  'hsl(15, 60.0%, 17.0%)',
  'hsl(322, 100%, 99.4%)',
  'hsl(323, 100%, 98.4%)',
  'hsl(323, 86.3%, 96.5%)',
  'hsl(323, 78.7%, 94.2%)',
  'hsl(323, 72.2%, 91.1%)',
  'hsl(323, 66.3%, 86.6%)',
  'hsl(323, 62.0%, 80.1%)',
  'hsl(323, 60.3%, 72.4%)',
  'hsl(322, 65.0%, 54.5%)',
  'hsl(322, 63.9%, 50.7%)',
  'hsl(322, 75.0%, 46.0%)',
  'hsl(320, 70.0%, 13.5%)',
  'hsl(280, 65.0%, 99.4%)',
  'hsl(276, 100%, 99.0%)',
  'hsl(276, 83.1%, 97.0%)',
  'hsl(275, 76.4%, 94.7%)',
  'hsl(275, 70.8%, 91.8%)',
  'hsl(274, 65.4%, 87.8%)',
  'hsl(273, 61.0%, 81.7%)',
  'hsl(272, 60.0%, 73.5%)',
  'hsl(272, 51.0%, 54.0%)',
  'hsl(272, 46.8%, 50.3%)',
  'hsl(272, 50.0%, 45.8%)',
  'hsl(272, 66.0%, 16.0%)',
  'hsl(359, 100%, 99.4%)',
  'hsl(359, 100%, 98.6%)',
  'hsl(360, 100%, 96.8%)',
  'hsl(360, 97.9%, 94.8%)',
  'hsl(360, 90.2%, 91.9%)',
  'hsl(360, 81.7%, 87.8%)',
  'hsl(359, 74.2%, 81.7%)',
  'hsl(359, 69.5%, 74.3%)',
  'hsl(358, 75.0%, 59.0%)',
  'hsl(358, 69.4%, 55.2%)',
  'hsl(358, 65.0%, 48.7%)',
  'hsl(354, 50.0%, 14.6%)',
  'hsl(60, 54.0%, 98.5%)',
  'hsl(52, 100%, 95.5%)',
  'hsl(55, 100%, 90.9%)',
  'hsl(54, 100%, 86.6%)',
  'hsl(52, 97.9%, 82.0%)',
  'hsl(50, 89.4%, 76.1%)',
  'hsl(47, 80.4%, 68.0%)',
  'hsl(48, 100%, 46.1%)',
  'hsl(53, 92.0%, 50.0%)',
  'hsl(50, 100%, 48.5%)',
  'hsl(42, 100%, 29.0%)',
  'hsl(40, 55.0%, 13.5%)',
  'rgba(0,0,0,0.085)',
  'rgba(0,0,0,0.04)',
  '#050505',
  '#151515',
  '#191919',
  '#232323',
  '#282828',
  '#323232',
  '#424242',
  '#494949',
  '#545454',
  '#626262',
  '#a5a5a5',
  'hsl(212, 35.0%, 9.2%)',
  'hsl(216, 50.0%, 11.8%)',
  'hsl(214, 59.4%, 15.3%)',
  'hsl(214, 65.8%, 17.9%)',
  'hsl(213, 71.2%, 20.2%)',
  'hsl(212, 77.4%, 23.1%)',
  'hsl(211, 85.1%, 27.4%)',
  'hsl(211, 89.7%, 34.1%)',
  'hsl(209, 100%, 60.6%)',
  'hsl(210, 100%, 66.1%)',
  'hsl(206, 98.0%, 95.8%)',
  'hsl(0, 0%, 8.5%)',
  'hsl(0, 0%, 11.0%)',
  'hsl(0, 0%, 13.6%)',
  'hsl(0, 0%, 15.8%)',
  'hsl(0, 0%, 17.9%)',
  'hsl(0, 0%, 20.5%)',
  'hsl(0, 0%, 24.3%)',
  'hsl(0, 0%, 31.2%)',
  'hsl(0, 0%, 43.9%)',
  'hsl(0, 0%, 49.4%)',
  'hsl(0, 0%, 62.8%)',
  'hsl(146, 30.0%, 7.4%)',
  'hsl(155, 44.2%, 8.4%)',
  'hsl(155, 46.7%, 10.9%)',
  'hsl(154, 48.4%, 12.9%)',
  'hsl(154, 49.7%, 14.9%)',
  'hsl(154, 50.9%, 17.6%)',
  'hsl(153, 51.8%, 21.8%)',
  'hsl(151, 51.7%, 28.4%)',
  'hsl(151, 49.3%, 46.5%)',
  'hsl(151, 50.0%, 53.2%)',
  'hsl(137, 72.0%, 94.0%)',
  'hsl(30, 70.0%, 7.2%)',
  'hsl(28, 100%, 8.4%)',
  'hsl(26, 91.1%, 11.6%)',
  'hsl(25, 88.3%, 14.1%)',
  'hsl(24, 87.6%, 16.6%)',
  'hsl(24, 88.6%, 19.8%)',
  'hsl(24, 92.4%, 24.0%)',
  'hsl(25, 100%, 29.0%)',
  'hsl(24, 100%, 58.5%)',
  'hsl(24, 100%, 62.2%)',
  'hsl(24, 97.0%, 93.2%)',
  'hsl(318, 25.0%, 9.6%)',
  'hsl(319, 32.2%, 11.6%)',
  'hsl(319, 41.0%, 16.0%)',
  'hsl(320, 45.4%, 18.7%)',
  'hsl(320, 49.0%, 21.1%)',
  'hsl(321, 53.6%, 24.4%)',
  'hsl(321, 61.1%, 29.7%)',
  'hsl(322, 74.9%, 37.5%)',
  'hsl(323, 72.8%, 59.2%)',
  'hsl(325, 90.0%, 66.4%)',
  'hsl(322, 90.0%, 95.8%)',
  'hsl(284, 20.0%, 9.6%)',
  'hsl(283, 30.0%, 11.8%)',
  'hsl(281, 37.5%, 16.5%)',
  'hsl(280, 41.2%, 20.0%)',
  'hsl(279, 43.8%, 23.3%)',
  'hsl(277, 46.4%, 27.5%)',
  'hsl(275, 49.3%, 34.6%)',
  'hsl(272, 52.1%, 45.9%)',
  'hsl(273, 57.3%, 59.1%)',
  'hsl(275, 80.0%, 71.0%)',
  'hsl(279, 75.0%, 95.7%)',
  'hsl(353, 23.0%, 9.8%)',
  'hsl(357, 34.4%, 12.0%)',
  'hsl(356, 43.4%, 16.4%)',
  'hsl(356, 47.6%, 19.2%)',
  'hsl(356, 51.1%, 21.9%)',
  'hsl(356, 55.2%, 25.9%)',
  'hsl(357, 60.2%, 31.8%)',
  'hsl(358, 65.0%, 40.4%)',
  'hsl(358, 85.3%, 64.0%)',
  'hsl(358, 100%, 69.5%)',
  'hsl(351, 89.0%, 96.0%)',
  'hsl(45, 100%, 5.5%)',
  'hsl(46, 100%, 6.7%)',
  'hsl(45, 100%, 8.7%)',
  'hsl(45, 100%, 10.4%)',
  'hsl(47, 100%, 12.1%)',
  'hsl(49, 100%, 14.3%)',
  'hsl(49, 90.3%, 18.4%)',
  'hsl(50, 100%, 22.0%)',
  'hsl(54, 100%, 68.0%)',
  'hsl(48, 100%, 47.0%)',
  'hsl(53, 100%, 91.0%)',
  'rgba(0,0,0,0.3)',
  'rgba(0,0,0,0.2)',
  'hsla(24, 70.0%, 99.0%, 0)',
  'hsla(15, 60.0%, 17.0%, 0)',
  'hsla(60, 54.0%, 98.5%, 0)',
  'hsla(40, 55.0%, 13.5%, 0)',
  'hsla(136, 50.0%, 98.9%, 0)',
  'hsla(155, 40.0%, 14.0%, 0)',
  'hsla(206, 100%, 99.2%, 0)',
  'hsla(211, 100%, 15.0%, 0)',
  'hsla(280, 65.0%, 99.4%, 0)',
  'hsla(272, 66.0%, 16.0%, 0)',
  'hsla(322, 100%, 99.4%, 0)',
  'hsla(320, 70.0%, 13.5%, 0)',
  'hsla(359, 100%, 99.4%, 0)',
  'hsla(354, 50.0%, 14.6%, 0)',
  'hsla(30, 70.0%, 7.2%, 0)',
  'hsla(24, 97.0%, 93.2%, 0)',
  'hsla(45, 100%, 5.5%, 0)',
  'hsla(53, 100%, 91.0%, 0)',
  'hsla(146, 30.0%, 7.4%, 0)',
  'hsla(137, 72.0%, 94.0%, 0)',
  'hsla(212, 35.0%, 9.2%, 0)',
  'hsla(206, 98.0%, 95.8%, 0)',
  'hsla(284, 20.0%, 9.6%, 0)',
  'hsla(279, 75.0%, 95.7%, 0)',
  'hsla(318, 25.0%, 9.6%, 0)',
  'hsla(322, 90.0%, 95.8%, 0)',
  'hsla(353, 23.0%, 9.8%, 0)',
  'hsla(351, 89.0%, 96.0%, 0)',
  'rgba(0,0,0,0.5)',
  'rgba(0,0,0,0.9)',
]

const ks = [
'color1',
'color2',
'color3',
'color4',
'color5',
'color6',
'color7',
'color8',
'color9',
'color10',
'color11',
'color12',
'background',
'backgroundHover',
'backgroundPress',
'backgroundFocus',
'backgroundStrong',
'backgroundTransparent',
'color',
'colorHover',
'colorPress',
'colorFocus',
'colorTransparent',
'borderColor',
'borderColorHover',
'borderColorFocus',
'borderColorPress',
'placeholderColor',
'blue1',
'blue2',
'blue3',
'blue4',
'blue5',
'blue6',
'blue7',
'blue8',
'blue9',
'blue10',
'blue11',
'blue12',
'gray1',
'gray2',
'gray3',
'gray4',
'gray5',
'gray6',
'gray7',
'gray8',
'gray9',
'gray10',
'gray11',
'gray12',
'green1',
'green2',
'green3',
'green4',
'green5',
'green6',
'green7',
'green8',
'green9',
'green10',
'green11',
'green12',
'orange1',
'orange2',
'orange3',
'orange4',
'orange5',
'orange6',
'orange7',
'orange8',
'orange9',
'orange10',
'orange11',
'orange12',
'pink1',
'pink2',
'pink3',
'pink4',
'pink5',
'pink6',
'pink7',
'pink8',
'pink9',
'pink10',
'pink11',
'pink12',
'purple1',
'purple2',
'purple3',
'purple4',
'purple5',
'purple6',
'purple7',
'purple8',
'purple9',
'purple10',
'purple11',
'purple12',
'red1',
'red2',
'red3',
'red4',
'red5',
'red6',
'red7',
'red8',
'red9',
'red10',
'red11',
'red12',
'yellow1',
'yellow2',
'yellow3',
'yellow4',
'yellow5',
'yellow6',
'yellow7',
'yellow8',
'yellow9',
'yellow10',
'yellow11',
'yellow12',
'shadowColor',
'shadowColorHover',
'shadowColorPress',
'shadowColorFocus']


const n1 = t([[0, 0],[1, 1],[2, 2],[3, 3],[4, 4],[5, 5],[6, 6],[7, 7],[8, 8],[9, 9],[10, 10],[11, 11],[12, 1],[13, 2],[14, 3],[15, 4],[16, 0],[17, 12],[18, 11],[19, 10],[20, 11],[21, 10],[22, 13],[23, 4],[24, 5],[25, 3],[26, 4],[27, 8],[28, 14],[29, 15],[30, 16],[31, 17],[32, 18],[33, 19],[34, 20],[35, 21],[36, 22],[37, 23],[38, 24],[39, 25],[40, 26],[41, 27],[42, 28],[43, 29],[44, 30],[45, 31],[46, 32],[47, 33],[48, 8],[49, 34],[50, 35],[51, 11],[52, 36],[53, 37],[54, 38],[55, 39],[56, 40],[57, 41],[58, 42],[59, 43],[60, 44],[61, 45],[62, 46],[63, 47],[64, 48],[65, 49],[66, 50],[67, 51],[68, 52],[69, 53],[70, 54],[71, 55],[72, 56],[73, 57],[74, 58],[75, 59],[76, 60],[77, 61],[78, 62],[79, 63],[80, 64],[81, 65],[82, 66],[83, 67],[84, 68],[85, 69],[86, 70],[87, 71],[88, 72],[89, 73],[90, 74],[91, 75],[92, 76],[93, 77],[94, 78],[95, 79],[96, 80],[97, 81],[98, 82],[99, 83],[100, 84],[101, 85],[102, 86],[103, 87],[104, 88],[105, 89],[106, 90],[107, 91],[108, 92],[109, 93],[110, 94],[111, 95],[112, 96],[113, 97],[114, 98],[115, 99],[116, 100],[117, 101],[118, 102],[119, 103],[120, 104],[121, 105],[122, 106],[123, 107],[124, 108],[125, 108],[126, 109],[127, 109]]) as Theme

export const light = n1 as Theme
const n2 = t([[0, 110],[1, 111],[2, 112],[3, 113],[4, 114],[5, 115],[6, 116],[7, 117],[8, 118],[9, 119],[10, 120],[11, 0],[12, 111],[13, 112],[14, 113],[15, 114],[16, 110],[17, 13],[18, 0],[19, 120],[20, 0],[21, 120],[22, 12],[23, 114],[24, 115],[25, 113],[26, 114],[27, 118],[28, 121],[29, 122],[30, 123],[31, 124],[32, 125],[33, 126],[34, 127],[35, 128],[36, 22],[37, 129],[38, 130],[39, 131],[40, 132],[41, 133],[42, 134],[43, 135],[44, 136],[45, 137],[46, 138],[47, 139],[48, 140],[49, 141],[50, 142],[51, 29],[52, 143],[53, 144],[54, 145],[55, 146],[56, 147],[57, 148],[58, 149],[59, 150],[60, 44],[61, 151],[62, 152],[63, 153],[64, 154],[65, 155],[66, 156],[67, 157],[68, 158],[69, 159],[70, 160],[71, 161],[72, 56],[73, 162],[74, 163],[75, 164],[76, 165],[77, 166],[78, 167],[79, 168],[80, 169],[81, 170],[82, 171],[83, 172],[84, 68],[85, 173],[86, 174],[87, 175],[88, 176],[89, 177],[90, 178],[91, 179],[92, 180],[93, 181],[94, 182],[95, 183],[96, 80],[97, 184],[98, 185],[99, 186],[100, 187],[101, 188],[102, 189],[103, 190],[104, 191],[105, 192],[106, 193],[107, 194],[108, 92],[109, 195],[110, 196],[111, 197],[112, 198],[113, 199],[114, 200],[115, 201],[116, 202],[117, 203],[118, 204],[119, 205],[120, 104],[121, 206],[122, 207],[123, 208],[124, 209],[125, 209],[126, 210],[127, 210]]) as Theme

export const dark = n2 as Theme
const n3 = t([[0, 48],[1, 49],[2, 50],[3, 51],[4, 52],[5, 53],[6, 55],[7, 56],[8, 57],[9, 58],[10, 59],[11, 11],[12, 49],[13, 50],[14, 51],[15, 52],[16, 48],[17, 211],[18, 11],[19, 59],[20, 11],[21, 59],[22, 212],[23, 51],[24, 52],[25, 51],[26, 51],[27, 57]]) as Theme

export const light_orange = n3 as Theme
const n4 = t([[0, 96],[1, 97],[2, 98],[3, 99],[4, 100],[5, 101],[6, 103],[7, 104],[8, 105],[9, 106],[10, 107],[11, 11],[12, 97],[13, 98],[14, 99],[15, 100],[16, 96],[17, 213],[18, 11],[19, 107],[20, 11],[21, 107],[22, 214],[23, 99],[24, 100],[25, 99],[26, 99],[27, 105]]) as Theme

export const light_yellow = n4 as Theme
const n5 = t([[0, 36],[1, 37],[2, 38],[3, 39],[4, 40],[5, 41],[6, 43],[7, 44],[8, 45],[9, 46],[10, 47],[11, 11],[12, 37],[13, 38],[14, 39],[15, 40],[16, 36],[17, 215],[18, 11],[19, 47],[20, 11],[21, 47],[22, 216],[23, 39],[24, 40],[25, 39],[26, 39],[27, 45]]) as Theme

export const light_green = n5 as Theme
const n6 = t([[0, 14],[1, 15],[2, 16],[3, 17],[4, 18],[5, 19],[6, 21],[7, 22],[8, 23],[9, 24],[10, 25],[11, 11],[12, 15],[13, 16],[14, 17],[15, 18],[16, 14],[17, 217],[18, 11],[19, 25],[20, 11],[21, 25],[22, 218],[23, 17],[24, 18],[25, 17],[26, 17],[27, 23]]) as Theme

export const light_blue = n6 as Theme
const n7 = t([[0, 72],[1, 73],[2, 74],[3, 75],[4, 76],[5, 77],[6, 79],[7, 80],[8, 81],[9, 82],[10, 83],[11, 11],[12, 73],[13, 74],[14, 75],[15, 76],[16, 72],[17, 219],[18, 11],[19, 83],[20, 11],[21, 83],[22, 220],[23, 75],[24, 76],[25, 75],[26, 75],[27, 81]]) as Theme

export const light_purple = n7 as Theme
const n8 = t([[0, 60],[1, 61],[2, 62],[3, 63],[4, 64],[5, 65],[6, 67],[7, 68],[8, 69],[9, 70],[10, 71],[11, 11],[12, 61],[13, 62],[14, 63],[15, 64],[16, 60],[17, 221],[18, 11],[19, 71],[20, 11],[21, 71],[22, 222],[23, 63],[24, 64],[25, 63],[26, 63],[27, 69]]) as Theme

export const light_pink = n8 as Theme
const n9 = t([[0, 84],[1, 85],[2, 86],[3, 87],[4, 88],[5, 89],[6, 91],[7, 92],[8, 93],[9, 94],[10, 95],[11, 11],[12, 85],[13, 86],[14, 87],[15, 88],[16, 84],[17, 223],[18, 11],[19, 95],[20, 11],[21, 95],[22, 224],[23, 87],[24, 88],[25, 87],[26, 87],[27, 93]]) as Theme

export const light_red = n9 as Theme
const n10 = t([[0, 154],[1, 155],[2, 156],[3, 157],[4, 158],[5, 159],[6, 161],[7, 56],[8, 162],[9, 163],[10, 164],[11, 0],[12, 155],[13, 156],[14, 157],[15, 158],[16, 154],[17, 225],[18, 0],[19, 164],[20, 0],[21, 164],[22, 226],[23, 158],[24, 159],[25, 157],[26, 158],[27, 162]]) as Theme

export const dark_orange = n10 as Theme
export const dark_orange_ListItem = n10 as Theme
const n11 = t([[0, 198],[1, 199],[2, 200],[3, 201],[4, 202],[5, 203],[6, 205],[7, 104],[8, 206],[9, 207],[10, 208],[11, 0],[12, 199],[13, 200],[14, 201],[15, 202],[16, 198],[17, 227],[18, 0],[19, 208],[20, 0],[21, 208],[22, 228],[23, 202],[24, 203],[25, 201],[26, 202],[27, 206]]) as Theme

export const dark_yellow = n11 as Theme
export const dark_yellow_ListItem = n11 as Theme
const n12 = t([[0, 143],[1, 144],[2, 145],[3, 146],[4, 147],[5, 148],[6, 150],[7, 44],[8, 151],[9, 152],[10, 153],[11, 0],[12, 144],[13, 145],[14, 146],[15, 147],[16, 143],[17, 229],[18, 0],[19, 153],[20, 0],[21, 153],[22, 230],[23, 147],[24, 148],[25, 146],[26, 147],[27, 151]]) as Theme

export const dark_green = n12 as Theme
export const dark_green_ListItem = n12 as Theme
const n13 = t([[0, 121],[1, 122],[2, 123],[3, 124],[4, 125],[5, 126],[6, 128],[7, 22],[8, 129],[9, 130],[10, 131],[11, 0],[12, 122],[13, 123],[14, 124],[15, 125],[16, 121],[17, 231],[18, 0],[19, 131],[20, 0],[21, 131],[22, 232],[23, 125],[24, 126],[25, 124],[26, 125],[27, 129]]) as Theme

export const dark_blue = n13 as Theme
export const dark_blue_ListItem = n13 as Theme
const n14 = t([[0, 176],[1, 177],[2, 178],[3, 179],[4, 180],[5, 181],[6, 183],[7, 80],[8, 184],[9, 185],[10, 186],[11, 0],[12, 177],[13, 178],[14, 179],[15, 180],[16, 176],[17, 233],[18, 0],[19, 186],[20, 0],[21, 186],[22, 234],[23, 180],[24, 181],[25, 179],[26, 180],[27, 184]]) as Theme

export const dark_purple = n14 as Theme
export const dark_purple_ListItem = n14 as Theme
const n15 = t([[0, 165],[1, 166],[2, 167],[3, 168],[4, 169],[5, 170],[6, 172],[7, 68],[8, 173],[9, 174],[10, 175],[11, 0],[12, 166],[13, 167],[14, 168],[15, 169],[16, 165],[17, 235],[18, 0],[19, 175],[20, 0],[21, 175],[22, 236],[23, 169],[24, 170],[25, 168],[26, 169],[27, 173]]) as Theme

export const dark_pink = n15 as Theme
export const dark_pink_ListItem = n15 as Theme
const n16 = t([[0, 187],[1, 188],[2, 189],[3, 190],[4, 191],[5, 192],[6, 194],[7, 92],[8, 195],[9, 196],[10, 197],[11, 0],[12, 188],[13, 189],[14, 190],[15, 191],[16, 187],[17, 237],[18, 0],[19, 197],[20, 0],[21, 197],[22, 238],[23, 191],[24, 192],[25, 190],[26, 191],[27, 195]]) as Theme

export const dark_red = n16 as Theme
export const dark_red_ListItem = n16 as Theme
const n17 = t([[12, 239]]) as Theme

export const light_SheetOverlay = n17 as Theme
export const light_DialogOverlay = n17 as Theme
export const light_ModalOverlay = n17 as Theme
export const light_orange_SheetOverlay = n17 as Theme
export const light_orange_DialogOverlay = n17 as Theme
export const light_orange_ModalOverlay = n17 as Theme
export const light_yellow_SheetOverlay = n17 as Theme
export const light_yellow_DialogOverlay = n17 as Theme
export const light_yellow_ModalOverlay = n17 as Theme
export const light_green_SheetOverlay = n17 as Theme
export const light_green_DialogOverlay = n17 as Theme
export const light_green_ModalOverlay = n17 as Theme
export const light_blue_SheetOverlay = n17 as Theme
export const light_blue_DialogOverlay = n17 as Theme
export const light_blue_ModalOverlay = n17 as Theme
export const light_purple_SheetOverlay = n17 as Theme
export const light_purple_DialogOverlay = n17 as Theme
export const light_purple_ModalOverlay = n17 as Theme
export const light_pink_SheetOverlay = n17 as Theme
export const light_pink_DialogOverlay = n17 as Theme
export const light_pink_ModalOverlay = n17 as Theme
export const light_red_SheetOverlay = n17 as Theme
export const light_red_DialogOverlay = n17 as Theme
export const light_red_ModalOverlay = n17 as Theme
export const light_alt1_SheetOverlay = n17 as Theme
export const light_alt1_DialogOverlay = n17 as Theme
export const light_alt1_ModalOverlay = n17 as Theme
export const light_alt2_SheetOverlay = n17 as Theme
export const light_alt2_DialogOverlay = n17 as Theme
export const light_alt2_ModalOverlay = n17 as Theme
export const light_active_SheetOverlay = n17 as Theme
export const light_active_DialogOverlay = n17 as Theme
export const light_active_ModalOverlay = n17 as Theme
export const light_orange_alt1_SheetOverlay = n17 as Theme
export const light_orange_alt1_DialogOverlay = n17 as Theme
export const light_orange_alt1_ModalOverlay = n17 as Theme
export const light_orange_alt2_SheetOverlay = n17 as Theme
export const light_orange_alt2_DialogOverlay = n17 as Theme
export const light_orange_alt2_ModalOverlay = n17 as Theme
export const light_orange_active_SheetOverlay = n17 as Theme
export const light_orange_active_DialogOverlay = n17 as Theme
export const light_orange_active_ModalOverlay = n17 as Theme
export const light_yellow_alt1_SheetOverlay = n17 as Theme
export const light_yellow_alt1_DialogOverlay = n17 as Theme
export const light_yellow_alt1_ModalOverlay = n17 as Theme
export const light_yellow_alt2_SheetOverlay = n17 as Theme
export const light_yellow_alt2_DialogOverlay = n17 as Theme
export const light_yellow_alt2_ModalOverlay = n17 as Theme
export const light_yellow_active_SheetOverlay = n17 as Theme
export const light_yellow_active_DialogOverlay = n17 as Theme
export const light_yellow_active_ModalOverlay = n17 as Theme
export const light_green_alt1_SheetOverlay = n17 as Theme
export const light_green_alt1_DialogOverlay = n17 as Theme
export const light_green_alt1_ModalOverlay = n17 as Theme
export const light_green_alt2_SheetOverlay = n17 as Theme
export const light_green_alt2_DialogOverlay = n17 as Theme
export const light_green_alt2_ModalOverlay = n17 as Theme
export const light_green_active_SheetOverlay = n17 as Theme
export const light_green_active_DialogOverlay = n17 as Theme
export const light_green_active_ModalOverlay = n17 as Theme
export const light_blue_alt1_SheetOverlay = n17 as Theme
export const light_blue_alt1_DialogOverlay = n17 as Theme
export const light_blue_alt1_ModalOverlay = n17 as Theme
export const light_blue_alt2_SheetOverlay = n17 as Theme
export const light_blue_alt2_DialogOverlay = n17 as Theme
export const light_blue_alt2_ModalOverlay = n17 as Theme
export const light_blue_active_SheetOverlay = n17 as Theme
export const light_blue_active_DialogOverlay = n17 as Theme
export const light_blue_active_ModalOverlay = n17 as Theme
export const light_purple_alt1_SheetOverlay = n17 as Theme
export const light_purple_alt1_DialogOverlay = n17 as Theme
export const light_purple_alt1_ModalOverlay = n17 as Theme
export const light_purple_alt2_SheetOverlay = n17 as Theme
export const light_purple_alt2_DialogOverlay = n17 as Theme
export const light_purple_alt2_ModalOverlay = n17 as Theme
export const light_purple_active_SheetOverlay = n17 as Theme
export const light_purple_active_DialogOverlay = n17 as Theme
export const light_purple_active_ModalOverlay = n17 as Theme
export const light_pink_alt1_SheetOverlay = n17 as Theme
export const light_pink_alt1_DialogOverlay = n17 as Theme
export const light_pink_alt1_ModalOverlay = n17 as Theme
export const light_pink_alt2_SheetOverlay = n17 as Theme
export const light_pink_alt2_DialogOverlay = n17 as Theme
export const light_pink_alt2_ModalOverlay = n17 as Theme
export const light_pink_active_SheetOverlay = n17 as Theme
export const light_pink_active_DialogOverlay = n17 as Theme
export const light_pink_active_ModalOverlay = n17 as Theme
export const light_red_alt1_SheetOverlay = n17 as Theme
export const light_red_alt1_DialogOverlay = n17 as Theme
export const light_red_alt1_ModalOverlay = n17 as Theme
export const light_red_alt2_SheetOverlay = n17 as Theme
export const light_red_alt2_DialogOverlay = n17 as Theme
export const light_red_alt2_ModalOverlay = n17 as Theme
export const light_red_active_SheetOverlay = n17 as Theme
export const light_red_active_DialogOverlay = n17 as Theme
export const light_red_active_ModalOverlay = n17 as Theme
const n18 = t([[12, 240]]) as Theme

export const dark_SheetOverlay = n18 as Theme
export const dark_DialogOverlay = n18 as Theme
export const dark_ModalOverlay = n18 as Theme
export const dark_orange_SheetOverlay = n18 as Theme
export const dark_orange_DialogOverlay = n18 as Theme
export const dark_orange_ModalOverlay = n18 as Theme
export const dark_yellow_SheetOverlay = n18 as Theme
export const dark_yellow_DialogOverlay = n18 as Theme
export const dark_yellow_ModalOverlay = n18 as Theme
export const dark_green_SheetOverlay = n18 as Theme
export const dark_green_DialogOverlay = n18 as Theme
export const dark_green_ModalOverlay = n18 as Theme
export const dark_blue_SheetOverlay = n18 as Theme
export const dark_blue_DialogOverlay = n18 as Theme
export const dark_blue_ModalOverlay = n18 as Theme
export const dark_purple_SheetOverlay = n18 as Theme
export const dark_purple_DialogOverlay = n18 as Theme
export const dark_purple_ModalOverlay = n18 as Theme
export const dark_pink_SheetOverlay = n18 as Theme
export const dark_pink_DialogOverlay = n18 as Theme
export const dark_pink_ModalOverlay = n18 as Theme
export const dark_red_SheetOverlay = n18 as Theme
export const dark_red_DialogOverlay = n18 as Theme
export const dark_red_ModalOverlay = n18 as Theme
export const dark_alt1_SheetOverlay = n18 as Theme
export const dark_alt1_DialogOverlay = n18 as Theme
export const dark_alt1_ModalOverlay = n18 as Theme
export const dark_alt2_SheetOverlay = n18 as Theme
export const dark_alt2_DialogOverlay = n18 as Theme
export const dark_alt2_ModalOverlay = n18 as Theme
export const dark_active_SheetOverlay = n18 as Theme
export const dark_active_DialogOverlay = n18 as Theme
export const dark_active_ModalOverlay = n18 as Theme
export const dark_orange_alt1_SheetOverlay = n18 as Theme
export const dark_orange_alt1_DialogOverlay = n18 as Theme
export const dark_orange_alt1_ModalOverlay = n18 as Theme
export const dark_orange_alt2_SheetOverlay = n18 as Theme
export const dark_orange_alt2_DialogOverlay = n18 as Theme
export const dark_orange_alt2_ModalOverlay = n18 as Theme
export const dark_orange_active_SheetOverlay = n18 as Theme
export const dark_orange_active_DialogOverlay = n18 as Theme
export const dark_orange_active_ModalOverlay = n18 as Theme
export const dark_yellow_alt1_SheetOverlay = n18 as Theme
export const dark_yellow_alt1_DialogOverlay = n18 as Theme
export const dark_yellow_alt1_ModalOverlay = n18 as Theme
export const dark_yellow_alt2_SheetOverlay = n18 as Theme
export const dark_yellow_alt2_DialogOverlay = n18 as Theme
export const dark_yellow_alt2_ModalOverlay = n18 as Theme
export const dark_yellow_active_SheetOverlay = n18 as Theme
export const dark_yellow_active_DialogOverlay = n18 as Theme
export const dark_yellow_active_ModalOverlay = n18 as Theme
export const dark_green_alt1_SheetOverlay = n18 as Theme
export const dark_green_alt1_DialogOverlay = n18 as Theme
export const dark_green_alt1_ModalOverlay = n18 as Theme
export const dark_green_alt2_SheetOverlay = n18 as Theme
export const dark_green_alt2_DialogOverlay = n18 as Theme
export const dark_green_alt2_ModalOverlay = n18 as Theme
export const dark_green_active_SheetOverlay = n18 as Theme
export const dark_green_active_DialogOverlay = n18 as Theme
export const dark_green_active_ModalOverlay = n18 as Theme
export const dark_blue_alt1_SheetOverlay = n18 as Theme
export const dark_blue_alt1_DialogOverlay = n18 as Theme
export const dark_blue_alt1_ModalOverlay = n18 as Theme
export const dark_blue_alt2_SheetOverlay = n18 as Theme
export const dark_blue_alt2_DialogOverlay = n18 as Theme
export const dark_blue_alt2_ModalOverlay = n18 as Theme
export const dark_blue_active_SheetOverlay = n18 as Theme
export const dark_blue_active_DialogOverlay = n18 as Theme
export const dark_blue_active_ModalOverlay = n18 as Theme
export const dark_purple_alt1_SheetOverlay = n18 as Theme
export const dark_purple_alt1_DialogOverlay = n18 as Theme
export const dark_purple_alt1_ModalOverlay = n18 as Theme
export const dark_purple_alt2_SheetOverlay = n18 as Theme
export const dark_purple_alt2_DialogOverlay = n18 as Theme
export const dark_purple_alt2_ModalOverlay = n18 as Theme
export const dark_purple_active_SheetOverlay = n18 as Theme
export const dark_purple_active_DialogOverlay = n18 as Theme
export const dark_purple_active_ModalOverlay = n18 as Theme
export const dark_pink_alt1_SheetOverlay = n18 as Theme
export const dark_pink_alt1_DialogOverlay = n18 as Theme
export const dark_pink_alt1_ModalOverlay = n18 as Theme
export const dark_pink_alt2_SheetOverlay = n18 as Theme
export const dark_pink_alt2_DialogOverlay = n18 as Theme
export const dark_pink_alt2_ModalOverlay = n18 as Theme
export const dark_pink_active_SheetOverlay = n18 as Theme
export const dark_pink_active_DialogOverlay = n18 as Theme
export const dark_pink_active_ModalOverlay = n18 as Theme
export const dark_red_alt1_SheetOverlay = n18 as Theme
export const dark_red_alt1_DialogOverlay = n18 as Theme
export const dark_red_alt1_ModalOverlay = n18 as Theme
export const dark_red_alt2_SheetOverlay = n18 as Theme
export const dark_red_alt2_DialogOverlay = n18 as Theme
export const dark_red_alt2_ModalOverlay = n18 as Theme
export const dark_red_active_SheetOverlay = n18 as Theme
export const dark_red_active_DialogOverlay = n18 as Theme
export const dark_red_active_ModalOverlay = n18 as Theme
const n19 = t([[0, 1],[1, 2],[2, 3],[3, 4],[4, 5],[5, 6],[6, 7],[7, 8],[8, 9],[9, 10],[10, 11],[11, 11],[12, 2],[13, 3],[14, 4],[15, 5],[16, 1],[17, 0],[18, 10],[19, 9],[20, 10],[21, 9],[22, 11],[23, 5],[24, 6],[25, 4],[26, 5],[27, 7]]) as Theme

export const light_alt1 = n19 as Theme
const n20 = t([[0, 2],[1, 3],[2, 4],[3, 5],[4, 6],[5, 7],[6, 8],[7, 9],[8, 10],[9, 11],[10, 11],[11, 11],[12, 3],[13, 4],[14, 5],[15, 6],[16, 2],[17, 1],[18, 9],[19, 8],[20, 9],[21, 8],[22, 10],[23, 5],[24, 6],[25, 4],[26, 5],[27, 6]]) as Theme

export const light_alt2 = n20 as Theme
const n21 = t([[0, 3],[1, 4],[2, 5],[3, 6],[4, 7],[5, 8],[6, 9],[7, 10],[8, 11],[9, 13],[10, 13],[11, 13],[12, 4],[13, 5],[14, 6],[15, 7],[16, 3],[17, 2],[19, 7],[20, 8],[21, 7],[22, 9],[23, 6],[24, 7],[25, 5],[26, 6],[27, 5]]) as Theme

export const light_active = n21 as Theme
const n22 = t([[0, 111],[1, 112],[2, 113],[3, 114],[4, 115],[5, 116],[6, 117],[7, 118],[8, 119],[9, 120],[10, 0],[11, 0],[12, 112],[13, 113],[14, 114],[15, 115],[16, 111],[17, 110],[18, 120],[19, 119],[20, 120],[21, 119],[22, 0],[23, 115],[24, 116],[25, 114],[26, 115],[27, 117]]) as Theme

export const dark_alt1 = n22 as Theme
export const dark_alt1_ListItem = n22 as Theme
const n23 = t([[0, 112],[1, 113],[2, 114],[3, 115],[4, 116],[5, 117],[6, 118],[7, 119],[8, 120],[9, 0],[10, 0],[11, 0],[12, 113],[13, 114],[14, 115],[15, 116],[16, 112],[17, 111],[18, 119],[19, 118],[20, 119],[21, 118],[22, 120],[23, 115],[24, 116],[25, 114],[26, 115],[27, 116]]) as Theme

export const dark_alt2 = n23 as Theme
export const dark_alt2_ListItem = n23 as Theme
const n24 = t([[0, 113],[1, 114],[2, 115],[3, 116],[4, 117],[5, 118],[6, 119],[7, 120],[8, 0],[9, 12],[10, 12],[11, 12],[12, 114],[13, 115],[14, 116],[15, 117],[16, 113],[17, 112],[19, 117],[20, 118],[21, 117],[22, 119],[23, 116],[24, 117],[25, 115],[26, 116],[27, 115]]) as Theme

export const dark_active = n24 as Theme
export const dark_active_ListItem = n24 as Theme
const n25 = t([[0, 49],[1, 50],[2, 51],[3, 52],[4, 53],[5, 55],[6, 56],[7, 57],[8, 58],[9, 59],[10, 11],[11, 11],[12, 50],[13, 51],[14, 52],[15, 53],[16, 49],[17, 48],[18, 59],[19, 58],[20, 59],[21, 58],[22, 11],[23, 52],[24, 53],[25, 52],[26, 52],[27, 56]]) as Theme

export const light_orange_alt1 = n25 as Theme
const n26 = t([[0, 50],[1, 51],[2, 52],[3, 53],[4, 55],[5, 56],[6, 57],[7, 58],[8, 59],[9, 11],[10, 11],[11, 11],[12, 51],[13, 52],[14, 53],[15, 55],[16, 50],[17, 49],[18, 58],[19, 57],[20, 58],[21, 57],[22, 59],[23, 52],[24, 53],[25, 52],[26, 52],[27, 55]]) as Theme

export const light_orange_alt2 = n26 as Theme
const n27 = t([[0, 51],[1, 52],[2, 53],[3, 55],[4, 56],[5, 57],[6, 58],[7, 59],[8, 11],[9, 212],[10, 212],[11, 212],[12, 52],[13, 53],[14, 55],[15, 56],[16, 51],[17, 50],[19, 56],[20, 57],[21, 56],[22, 58],[23, 53],[24, 55],[25, 53],[26, 53],[27, 53]]) as Theme

export const light_orange_active = n27 as Theme
const n28 = t([[0, 97],[1, 98],[2, 99],[3, 100],[4, 101],[5, 103],[6, 104],[7, 105],[8, 106],[9, 107],[10, 11],[11, 11],[12, 98],[13, 99],[14, 100],[15, 101],[16, 97],[17, 96],[18, 107],[19, 106],[20, 107],[21, 106],[22, 11],[23, 100],[24, 101],[25, 100],[26, 100],[27, 104]]) as Theme

export const light_yellow_alt1 = n28 as Theme
const n29 = t([[0, 98],[1, 99],[2, 100],[3, 101],[4, 103],[5, 104],[6, 105],[7, 106],[8, 107],[9, 11],[10, 11],[11, 11],[12, 99],[13, 100],[14, 101],[15, 103],[16, 98],[17, 97],[18, 106],[19, 105],[20, 106],[21, 105],[22, 107],[23, 100],[24, 101],[25, 100],[26, 100],[27, 103]]) as Theme

export const light_yellow_alt2 = n29 as Theme
const n30 = t([[0, 99],[1, 100],[2, 101],[3, 103],[4, 104],[5, 105],[6, 106],[7, 107],[8, 11],[9, 214],[10, 214],[11, 214],[12, 100],[13, 101],[14, 103],[15, 104],[16, 99],[17, 98],[19, 104],[20, 105],[21, 104],[22, 106],[23, 101],[24, 103],[25, 101],[26, 101],[27, 101]]) as Theme

export const light_yellow_active = n30 as Theme
const n31 = t([[0, 37],[1, 38],[2, 39],[3, 40],[4, 41],[5, 43],[6, 44],[7, 45],[8, 46],[9, 47],[10, 11],[11, 11],[12, 38],[13, 39],[14, 40],[15, 41],[16, 37],[17, 36],[18, 47],[19, 46],[20, 47],[21, 46],[22, 11],[23, 40],[24, 41],[25, 40],[26, 40],[27, 44]]) as Theme

export const light_green_alt1 = n31 as Theme
const n32 = t([[0, 38],[1, 39],[2, 40],[3, 41],[4, 43],[5, 44],[6, 45],[7, 46],[8, 47],[9, 11],[10, 11],[11, 11],[12, 39],[13, 40],[14, 41],[15, 43],[16, 38],[17, 37],[18, 46],[19, 45],[20, 46],[21, 45],[22, 47],[23, 40],[24, 41],[25, 40],[26, 40],[27, 43]]) as Theme

export const light_green_alt2 = n32 as Theme
const n33 = t([[0, 39],[1, 40],[2, 41],[3, 43],[4, 44],[5, 45],[6, 46],[7, 47],[8, 11],[9, 216],[10, 216],[11, 216],[12, 40],[13, 41],[14, 43],[15, 44],[16, 39],[17, 38],[19, 44],[20, 45],[21, 44],[22, 46],[23, 41],[24, 43],[25, 41],[26, 41],[27, 41]]) as Theme

export const light_green_active = n33 as Theme
const n34 = t([[0, 15],[1, 16],[2, 17],[3, 18],[4, 19],[5, 21],[6, 22],[7, 23],[8, 24],[9, 25],[10, 11],[11, 11],[12, 16],[13, 17],[14, 18],[15, 19],[16, 15],[17, 14],[18, 25],[19, 24],[20, 25],[21, 24],[22, 11],[23, 18],[24, 19],[25, 18],[26, 18],[27, 22]]) as Theme

export const light_blue_alt1 = n34 as Theme
const n35 = t([[0, 16],[1, 17],[2, 18],[3, 19],[4, 21],[5, 22],[6, 23],[7, 24],[8, 25],[9, 11],[10, 11],[11, 11],[12, 17],[13, 18],[14, 19],[15, 21],[16, 16],[17, 15],[18, 24],[19, 23],[20, 24],[21, 23],[22, 25],[23, 18],[24, 19],[25, 18],[26, 18],[27, 21]]) as Theme

export const light_blue_alt2 = n35 as Theme
const n36 = t([[0, 17],[1, 18],[2, 19],[3, 21],[4, 22],[5, 23],[6, 24],[7, 25],[8, 11],[9, 218],[10, 218],[11, 218],[12, 18],[13, 19],[14, 21],[15, 22],[16, 17],[17, 16],[19, 22],[20, 23],[21, 22],[22, 24],[23, 19],[24, 21],[25, 19],[26, 19],[27, 19]]) as Theme

export const light_blue_active = n36 as Theme
const n37 = t([[0, 73],[1, 74],[2, 75],[3, 76],[4, 77],[5, 79],[6, 80],[7, 81],[8, 82],[9, 83],[10, 11],[11, 11],[12, 74],[13, 75],[14, 76],[15, 77],[16, 73],[17, 72],[18, 83],[19, 82],[20, 83],[21, 82],[22, 11],[23, 76],[24, 77],[25, 76],[26, 76],[27, 80]]) as Theme

export const light_purple_alt1 = n37 as Theme
const n38 = t([[0, 74],[1, 75],[2, 76],[3, 77],[4, 79],[5, 80],[6, 81],[7, 82],[8, 83],[9, 11],[10, 11],[11, 11],[12, 75],[13, 76],[14, 77],[15, 79],[16, 74],[17, 73],[18, 82],[19, 81],[20, 82],[21, 81],[22, 83],[23, 76],[24, 77],[25, 76],[26, 76],[27, 79]]) as Theme

export const light_purple_alt2 = n38 as Theme
const n39 = t([[0, 75],[1, 76],[2, 77],[3, 79],[4, 80],[5, 81],[6, 82],[7, 83],[8, 11],[9, 220],[10, 220],[11, 220],[12, 76],[13, 77],[14, 79],[15, 80],[16, 75],[17, 74],[19, 80],[20, 81],[21, 80],[22, 82],[23, 77],[24, 79],[25, 77],[26, 77],[27, 77]]) as Theme

export const light_purple_active = n39 as Theme
const n40 = t([[0, 61],[1, 62],[2, 63],[3, 64],[4, 65],[5, 67],[6, 68],[7, 69],[8, 70],[9, 71],[10, 11],[11, 11],[12, 62],[13, 63],[14, 64],[15, 65],[16, 61],[17, 60],[18, 71],[19, 70],[20, 71],[21, 70],[22, 11],[23, 64],[24, 65],[25, 64],[26, 64],[27, 68]]) as Theme

export const light_pink_alt1 = n40 as Theme
const n41 = t([[0, 62],[1, 63],[2, 64],[3, 65],[4, 67],[5, 68],[6, 69],[7, 70],[8, 71],[9, 11],[10, 11],[11, 11],[12, 63],[13, 64],[14, 65],[15, 67],[16, 62],[17, 61],[18, 70],[19, 69],[20, 70],[21, 69],[22, 71],[23, 64],[24, 65],[25, 64],[26, 64],[27, 67]]) as Theme

export const light_pink_alt2 = n41 as Theme
const n42 = t([[0, 63],[1, 64],[2, 65],[3, 67],[4, 68],[5, 69],[6, 70],[7, 71],[8, 11],[9, 222],[10, 222],[11, 222],[12, 64],[13, 65],[14, 67],[15, 68],[16, 63],[17, 62],[19, 68],[20, 69],[21, 68],[22, 70],[23, 65],[24, 67],[25, 65],[26, 65],[27, 65]]) as Theme

export const light_pink_active = n42 as Theme
const n43 = t([[0, 85],[1, 86],[2, 87],[3, 88],[4, 89],[5, 91],[6, 92],[7, 93],[8, 94],[9, 95],[10, 11],[11, 11],[12, 86],[13, 87],[14, 88],[15, 89],[16, 85],[17, 84],[18, 95],[19, 94],[20, 95],[21, 94],[22, 11],[23, 88],[24, 89],[25, 88],[26, 88],[27, 92]]) as Theme

export const light_red_alt1 = n43 as Theme
const n44 = t([[0, 86],[1, 87],[2, 88],[3, 89],[4, 91],[5, 92],[6, 93],[7, 94],[8, 95],[9, 11],[10, 11],[11, 11],[12, 87],[13, 88],[14, 89],[15, 91],[16, 86],[17, 85],[18, 94],[19, 93],[20, 94],[21, 93],[22, 95],[23, 88],[24, 89],[25, 88],[26, 88],[27, 91]]) as Theme

export const light_red_alt2 = n44 as Theme
const n45 = t([[0, 87],[1, 88],[2, 89],[3, 91],[4, 92],[5, 93],[6, 94],[7, 95],[8, 11],[9, 224],[10, 224],[11, 224],[12, 88],[13, 89],[14, 91],[15, 92],[16, 87],[17, 86],[19, 92],[20, 93],[21, 92],[22, 94],[23, 89],[24, 91],[25, 89],[26, 89],[27, 89]]) as Theme

export const light_red_active = n45 as Theme
const n46 = t([[0, 155],[1, 156],[2, 157],[3, 158],[4, 159],[5, 161],[6, 56],[7, 162],[8, 163],[9, 164],[10, 0],[11, 0],[12, 156],[13, 157],[14, 158],[15, 159],[16, 155],[17, 154],[18, 164],[19, 163],[20, 164],[21, 163],[22, 0],[23, 159],[24, 161],[25, 158],[26, 159],[27, 56]]) as Theme

export const dark_orange_alt1 = n46 as Theme
export const dark_orange_alt1_ListItem = n46 as Theme
const n47 = t([[0, 156],[1, 157],[2, 158],[3, 159],[4, 161],[5, 56],[6, 162],[7, 163],[8, 164],[9, 0],[10, 0],[11, 0],[12, 157],[13, 158],[14, 159],[15, 161],[16, 156],[17, 155],[18, 163],[19, 162],[20, 163],[21, 162],[22, 164],[23, 159],[24, 161],[25, 158],[26, 159],[27, 161]]) as Theme

export const dark_orange_alt2 = n47 as Theme
export const dark_orange_alt2_ListItem = n47 as Theme
const n48 = t([[0, 157],[1, 158],[2, 159],[3, 161],[4, 56],[5, 162],[6, 163],[7, 164],[8, 0],[9, 226],[10, 226],[11, 226],[12, 158],[13, 159],[14, 161],[15, 56],[16, 157],[17, 156],[19, 56],[20, 162],[21, 56],[22, 163],[23, 161],[24, 56],[25, 159],[26, 161],[27, 159]]) as Theme

export const dark_orange_active = n48 as Theme
export const dark_orange_active_ListItem = n48 as Theme
const n49 = t([[0, 199],[1, 200],[2, 201],[3, 202],[4, 203],[5, 205],[6, 104],[7, 206],[8, 207],[9, 208],[10, 0],[11, 0],[12, 200],[13, 201],[14, 202],[15, 203],[16, 199],[17, 198],[18, 208],[19, 207],[20, 208],[21, 207],[22, 0],[23, 203],[24, 205],[25, 202],[26, 203],[27, 104]]) as Theme

export const dark_yellow_alt1 = n49 as Theme
export const dark_yellow_alt1_ListItem = n49 as Theme
const n50 = t([[0, 200],[1, 201],[2, 202],[3, 203],[4, 205],[5, 104],[6, 206],[7, 207],[8, 208],[9, 0],[10, 0],[11, 0],[12, 201],[13, 202],[14, 203],[15, 205],[16, 200],[17, 199],[18, 207],[19, 206],[20, 207],[21, 206],[22, 208],[23, 203],[24, 205],[25, 202],[26, 203],[27, 205]]) as Theme

export const dark_yellow_alt2 = n50 as Theme
export const dark_yellow_alt2_ListItem = n50 as Theme
const n51 = t([[0, 201],[1, 202],[2, 203],[3, 205],[4, 104],[5, 206],[6, 207],[7, 208],[8, 0],[9, 228],[10, 228],[11, 228],[12, 202],[13, 203],[14, 205],[15, 104],[16, 201],[17, 200],[19, 104],[20, 206],[21, 104],[22, 207],[23, 205],[24, 104],[25, 203],[26, 205],[27, 203]]) as Theme

export const dark_yellow_active = n51 as Theme
export const dark_yellow_active_ListItem = n51 as Theme
const n52 = t([[0, 144],[1, 145],[2, 146],[3, 147],[4, 148],[5, 150],[6, 44],[7, 151],[8, 152],[9, 153],[10, 0],[11, 0],[12, 145],[13, 146],[14, 147],[15, 148],[16, 144],[17, 143],[18, 153],[19, 152],[20, 153],[21, 152],[22, 0],[23, 148],[24, 150],[25, 147],[26, 148],[27, 44]]) as Theme

export const dark_green_alt1 = n52 as Theme
export const dark_green_alt1_ListItem = n52 as Theme
const n53 = t([[0, 145],[1, 146],[2, 147],[3, 148],[4, 150],[5, 44],[6, 151],[7, 152],[8, 153],[9, 0],[10, 0],[11, 0],[12, 146],[13, 147],[14, 148],[15, 150],[16, 145],[17, 144],[18, 152],[19, 151],[20, 152],[21, 151],[22, 153],[23, 148],[24, 150],[25, 147],[26, 148],[27, 150]]) as Theme

export const dark_green_alt2 = n53 as Theme
export const dark_green_alt2_ListItem = n53 as Theme
const n54 = t([[0, 146],[1, 147],[2, 148],[3, 150],[4, 44],[5, 151],[6, 152],[7, 153],[8, 0],[9, 230],[10, 230],[11, 230],[12, 147],[13, 148],[14, 150],[15, 44],[16, 146],[17, 145],[19, 44],[20, 151],[21, 44],[22, 152],[23, 150],[24, 44],[25, 148],[26, 150],[27, 148]]) as Theme

export const dark_green_active = n54 as Theme
export const dark_green_active_ListItem = n54 as Theme
const n55 = t([[0, 122],[1, 123],[2, 124],[3, 125],[4, 126],[5, 128],[6, 22],[7, 129],[8, 130],[9, 131],[10, 0],[11, 0],[12, 123],[13, 124],[14, 125],[15, 126],[16, 122],[17, 121],[18, 131],[19, 130],[20, 131],[21, 130],[22, 0],[23, 126],[24, 128],[25, 125],[26, 126],[27, 22]]) as Theme

export const dark_blue_alt1 = n55 as Theme
export const dark_blue_alt1_ListItem = n55 as Theme
const n56 = t([[0, 123],[1, 124],[2, 125],[3, 126],[4, 128],[5, 22],[6, 129],[7, 130],[8, 131],[9, 0],[10, 0],[11, 0],[12, 124],[13, 125],[14, 126],[15, 128],[16, 123],[17, 122],[18, 130],[19, 129],[20, 130],[21, 129],[22, 131],[23, 126],[24, 128],[25, 125],[26, 126],[27, 128]]) as Theme

export const dark_blue_alt2 = n56 as Theme
export const dark_blue_alt2_ListItem = n56 as Theme
const n57 = t([[0, 124],[1, 125],[2, 126],[3, 128],[4, 22],[5, 129],[6, 130],[7, 131],[8, 0],[9, 232],[10, 232],[11, 232],[12, 125],[13, 126],[14, 128],[15, 22],[16, 124],[17, 123],[19, 22],[20, 129],[21, 22],[22, 130],[23, 128],[24, 22],[25, 126],[26, 128],[27, 126]]) as Theme

export const dark_blue_active = n57 as Theme
export const dark_blue_active_ListItem = n57 as Theme
const n58 = t([[0, 177],[1, 178],[2, 179],[3, 180],[4, 181],[5, 183],[6, 80],[7, 184],[8, 185],[9, 186],[10, 0],[11, 0],[12, 178],[13, 179],[14, 180],[15, 181],[16, 177],[17, 176],[18, 186],[19, 185],[20, 186],[21, 185],[22, 0],[23, 181],[24, 183],[25, 180],[26, 181],[27, 80]]) as Theme

export const dark_purple_alt1 = n58 as Theme
export const dark_purple_alt1_ListItem = n58 as Theme
const n59 = t([[0, 178],[1, 179],[2, 180],[3, 181],[4, 183],[5, 80],[6, 184],[7, 185],[8, 186],[9, 0],[10, 0],[11, 0],[12, 179],[13, 180],[14, 181],[15, 183],[16, 178],[17, 177],[18, 185],[19, 184],[20, 185],[21, 184],[22, 186],[23, 181],[24, 183],[25, 180],[26, 181],[27, 183]]) as Theme

export const dark_purple_alt2 = n59 as Theme
export const dark_purple_alt2_ListItem = n59 as Theme
const n60 = t([[0, 179],[1, 180],[2, 181],[3, 183],[4, 80],[5, 184],[6, 185],[7, 186],[8, 0],[9, 234],[10, 234],[11, 234],[12, 180],[13, 181],[14, 183],[15, 80],[16, 179],[17, 178],[19, 80],[20, 184],[21, 80],[22, 185],[23, 183],[24, 80],[25, 181],[26, 183],[27, 181]]) as Theme

export const dark_purple_active = n60 as Theme
export const dark_purple_active_ListItem = n60 as Theme
const n61 = t([[0, 166],[1, 167],[2, 168],[3, 169],[4, 170],[5, 172],[6, 68],[7, 173],[8, 174],[9, 175],[10, 0],[11, 0],[12, 167],[13, 168],[14, 169],[15, 170],[16, 166],[17, 165],[18, 175],[19, 174],[20, 175],[21, 174],[22, 0],[23, 170],[24, 172],[25, 169],[26, 170],[27, 68]]) as Theme

export const dark_pink_alt1 = n61 as Theme
export const dark_pink_alt1_ListItem = n61 as Theme
const n62 = t([[0, 167],[1, 168],[2, 169],[3, 170],[4, 172],[5, 68],[6, 173],[7, 174],[8, 175],[9, 0],[10, 0],[11, 0],[12, 168],[13, 169],[14, 170],[15, 172],[16, 167],[17, 166],[18, 174],[19, 173],[20, 174],[21, 173],[22, 175],[23, 170],[24, 172],[25, 169],[26, 170],[27, 172]]) as Theme

export const dark_pink_alt2 = n62 as Theme
export const dark_pink_alt2_ListItem = n62 as Theme
const n63 = t([[0, 168],[1, 169],[2, 170],[3, 172],[4, 68],[5, 173],[6, 174],[7, 175],[8, 0],[9, 236],[10, 236],[11, 236],[12, 169],[13, 170],[14, 172],[15, 68],[16, 168],[17, 167],[19, 68],[20, 173],[21, 68],[22, 174],[23, 172],[24, 68],[25, 170],[26, 172],[27, 170]]) as Theme

export const dark_pink_active = n63 as Theme
export const dark_pink_active_ListItem = n63 as Theme
const n64 = t([[0, 188],[1, 189],[2, 190],[3, 191],[4, 192],[5, 194],[6, 92],[7, 195],[8, 196],[9, 197],[10, 0],[11, 0],[12, 189],[13, 190],[14, 191],[15, 192],[16, 188],[17, 187],[18, 197],[19, 196],[20, 197],[21, 196],[22, 0],[23, 192],[24, 194],[25, 191],[26, 192],[27, 92]]) as Theme

export const dark_red_alt1 = n64 as Theme
export const dark_red_alt1_ListItem = n64 as Theme
const n65 = t([[0, 189],[1, 190],[2, 191],[3, 192],[4, 194],[5, 92],[6, 195],[7, 196],[8, 197],[9, 0],[10, 0],[11, 0],[12, 190],[13, 191],[14, 192],[15, 194],[16, 189],[17, 188],[18, 196],[19, 195],[20, 196],[21, 195],[22, 197],[23, 192],[24, 194],[25, 191],[26, 192],[27, 194]]) as Theme

export const dark_red_alt2 = n65 as Theme
export const dark_red_alt2_ListItem = n65 as Theme
const n66 = t([[0, 190],[1, 191],[2, 192],[3, 194],[4, 92],[5, 195],[6, 196],[7, 197],[8, 0],[9, 238],[10, 238],[11, 238],[12, 191],[13, 192],[14, 194],[15, 92],[16, 190],[17, 189],[19, 92],[20, 195],[21, 92],[22, 196],[23, 194],[24, 92],[25, 192],[26, 194],[27, 192]]) as Theme

export const dark_red_active = n66 as Theme
export const dark_red_active_ListItem = n66 as Theme
const n67 = t([[12, 0],[13, 1],[14, 2],[15, 3],[16, 0],[17, 0],[18, 11],[19, 10],[20, 11],[21, 10],[22, 11],[23, 3],[24, 4],[25, 2],[26, 3],[27, 9]]) as Theme

export const light_ListItem = n67 as Theme
const n68 = t([[12, 2],[13, 3],[14, 4],[15, 5],[16, 1],[17, 0],[18, 11],[19, 10],[20, 11],[21, 10],[22, 11],[23, 5],[24, 6],[25, 4],[26, 5],[27, 7]]) as Theme

export const light_Card = n68 as Theme
export const light_DrawerFrame = n68 as Theme
export const light_Progress = n68 as Theme
export const light_TooltipArrow = n68 as Theme
const n69 = t([[12, 3],[13, 4],[14, 5],[15, 6],[16, 2],[17, 1],[18, 11],[19, 10],[20, 11],[21, 10],[22, 10],[23, 5],[24, 6],[25, 4],[26, 5],[27, 6]]) as Theme

export const light_Button = n69 as Theme
export const light_Switch = n69 as Theme
export const light_TooltipContent = n69 as Theme
export const light_SliderTrack = n69 as Theme
const n70 = t([[12, 1],[13, 2],[14, 3],[15, 4],[16, 0],[17, 12],[18, 11],[19, 10],[20, 11],[21, 10],[22, 13],[23, 6],[24, 7],[25, 5],[26, 6],[27, 8]]) as Theme

export const light_Checkbox = n70 as Theme
export const light_RadioGroupItem = n70 as Theme
export const light_Input = n70 as Theme
export const light_TextArea = n70 as Theme
const n71 = t([[12, 11],[13, 11],[14, 10],[15, 9],[16, 11],[17, 11],[18, 0],[19, 1],[20, 0],[21, 1],[22, 0],[23, 9],[24, 8],[25, 10],[26, 9],[27, 1]]) as Theme

export const light_SwitchThumb = n71 as Theme
const n72 = t([[12, 8],[13, 7],[14, 6],[15, 5],[16, 9],[17, 10],[18, 0],[19, 1],[20, 0],[21, 1],[22, 1],[23, 5],[24, 4],[25, 6],[26, 5],[27, 5]]) as Theme

export const light_SliderTrackActive = n72 as Theme
const n73 = t([[12, 10],[13, 9],[14, 8],[15, 7],[16, 11],[17, 13],[18, 0],[19, 1],[20, 0],[21, 1],[22, 12],[23, 7],[24, 6],[25, 8],[26, 7],[27, 3]]) as Theme

export const light_SliderThumb = n73 as Theme
export const light_Tooltip = n73 as Theme
export const light_ProgressIndicator = n73 as Theme
const n74 = t([[0, 110],[1, 111],[2, 112],[3, 113],[4, 114],[5, 115],[6, 116],[7, 117],[8, 118],[9, 119],[10, 120],[11, 0],[12, 111],[13, 112],[14, 113],[15, 114],[16, 110],[17, 13],[18, 0],[19, 120],[20, 0],[21, 120],[22, 12],[23, 114],[24, 115],[25, 113],[26, 114],[27, 118]]) as Theme

export const dark_ListItem = n74 as Theme
const n75 = t([[12, 112],[13, 113],[14, 114],[15, 115],[16, 111],[17, 110],[18, 0],[19, 120],[20, 0],[21, 120],[22, 0],[23, 115],[24, 116],[25, 114],[26, 115],[27, 117]]) as Theme

export const dark_Card = n75 as Theme
export const dark_DrawerFrame = n75 as Theme
export const dark_Progress = n75 as Theme
export const dark_TooltipArrow = n75 as Theme
const n76 = t([[12, 113],[13, 114],[14, 115],[15, 116],[16, 112],[17, 111],[18, 0],[19, 120],[20, 0],[21, 120],[22, 120],[23, 115],[24, 116],[25, 114],[26, 115],[27, 116]]) as Theme

export const dark_Button = n76 as Theme
export const dark_Switch = n76 as Theme
export const dark_TooltipContent = n76 as Theme
export const dark_SliderTrack = n76 as Theme
const n77 = t([[12, 111],[13, 112],[14, 113],[15, 114],[16, 110],[17, 13],[18, 0],[19, 120],[20, 0],[21, 120],[22, 12],[23, 116],[24, 117],[25, 115],[26, 116],[27, 118]]) as Theme

export const dark_Checkbox = n77 as Theme
export const dark_RadioGroupItem = n77 as Theme
export const dark_Input = n77 as Theme
export const dark_TextArea = n77 as Theme
const n78 = t([[12, 0],[13, 0],[14, 120],[15, 119],[16, 0],[17, 0],[18, 110],[19, 111],[20, 110],[21, 111],[22, 110],[23, 119],[24, 118],[25, 120],[26, 119],[27, 111]]) as Theme

export const dark_SwitchThumb = n78 as Theme
const n79 = t([[12, 118],[13, 117],[14, 116],[15, 115],[16, 119],[17, 120],[18, 110],[19, 111],[20, 110],[21, 111],[22, 111],[23, 115],[24, 114],[25, 116],[26, 115],[27, 115]]) as Theme

export const dark_SliderTrackActive = n79 as Theme
const n80 = t([[12, 120],[13, 119],[14, 118],[15, 117],[16, 0],[17, 12],[18, 110],[19, 111],[20, 110],[21, 111],[22, 13],[23, 117],[24, 116],[25, 118],[26, 117],[27, 113]]) as Theme

export const dark_SliderThumb = n80 as Theme
export const dark_Tooltip = n80 as Theme
export const dark_ProgressIndicator = n80 as Theme
const n81 = t([[12, 48],[13, 49],[14, 50],[15, 51],[16, 48],[17, 48],[18, 11],[19, 59],[20, 11],[21, 59],[22, 11],[23, 50],[24, 51],[25, 50],[26, 50],[27, 58]]) as Theme

export const light_orange_ListItem = n81 as Theme
const n82 = t([[12, 50],[13, 51],[14, 52],[15, 53],[16, 49],[17, 48],[18, 11],[19, 59],[20, 11],[21, 59],[22, 11],[23, 52],[24, 53],[25, 52],[26, 52],[27, 56]]) as Theme

export const light_orange_Card = n82 as Theme
export const light_orange_DrawerFrame = n82 as Theme
export const light_orange_Progress = n82 as Theme
export const light_orange_TooltipArrow = n82 as Theme
const n83 = t([[12, 51],[13, 52],[14, 53],[15, 55],[16, 50],[17, 49],[18, 11],[19, 59],[20, 11],[21, 59],[22, 59],[23, 52],[24, 53],[25, 52],[26, 52],[27, 55]]) as Theme

export const light_orange_Button = n83 as Theme
export const light_orange_Switch = n83 as Theme
export const light_orange_TooltipContent = n83 as Theme
export const light_orange_SliderTrack = n83 as Theme
const n84 = t([[12, 49],[13, 50],[14, 51],[15, 52],[16, 48],[17, 211],[18, 11],[19, 59],[20, 11],[21, 59],[22, 212],[23, 53],[24, 55],[25, 53],[26, 53],[27, 57]]) as Theme

export const light_orange_Checkbox = n84 as Theme
export const light_orange_RadioGroupItem = n84 as Theme
export const light_orange_Input = n84 as Theme
export const light_orange_TextArea = n84 as Theme
const n85 = t([[12, 11],[13, 11],[14, 59],[15, 58],[16, 11],[17, 11],[18, 48],[19, 49],[20, 48],[21, 49],[22, 48],[23, 59],[24, 58],[25, 59],[26, 59],[27, 49]]) as Theme

export const light_orange_SwitchThumb = n85 as Theme
const n86 = t([[12, 57],[13, 56],[14, 55],[15, 53],[16, 58],[17, 59],[18, 48],[19, 49],[20, 48],[21, 49],[22, 49],[23, 55],[24, 53],[25, 55],[26, 55],[27, 53]]) as Theme

export const light_orange_SliderTrackActive = n86 as Theme
const n87 = t([[12, 59],[13, 58],[14, 57],[15, 56],[16, 11],[17, 212],[18, 48],[19, 49],[20, 48],[21, 49],[22, 211],[23, 57],[24, 56],[25, 57],[26, 57],[27, 51]]) as Theme

export const light_orange_SliderThumb = n87 as Theme
export const light_orange_Tooltip = n87 as Theme
export const light_orange_ProgressIndicator = n87 as Theme
const n88 = t([[12, 96],[13, 97],[14, 98],[15, 99],[16, 96],[17, 96],[18, 11],[19, 107],[20, 11],[21, 107],[22, 11],[23, 98],[24, 99],[25, 98],[26, 98],[27, 106]]) as Theme

export const light_yellow_ListItem = n88 as Theme
const n89 = t([[12, 98],[13, 99],[14, 100],[15, 101],[16, 97],[17, 96],[18, 11],[19, 107],[20, 11],[21, 107],[22, 11],[23, 100],[24, 101],[25, 100],[26, 100],[27, 104]]) as Theme

export const light_yellow_Card = n89 as Theme
export const light_yellow_DrawerFrame = n89 as Theme
export const light_yellow_Progress = n89 as Theme
export const light_yellow_TooltipArrow = n89 as Theme
const n90 = t([[12, 99],[13, 100],[14, 101],[15, 103],[16, 98],[17, 97],[18, 11],[19, 107],[20, 11],[21, 107],[22, 107],[23, 100],[24, 101],[25, 100],[26, 100],[27, 103]]) as Theme

export const light_yellow_Button = n90 as Theme
export const light_yellow_Switch = n90 as Theme
export const light_yellow_TooltipContent = n90 as Theme
export const light_yellow_SliderTrack = n90 as Theme
const n91 = t([[12, 97],[13, 98],[14, 99],[15, 100],[16, 96],[17, 213],[18, 11],[19, 107],[20, 11],[21, 107],[22, 214],[23, 101],[24, 103],[25, 101],[26, 101],[27, 105]]) as Theme

export const light_yellow_Checkbox = n91 as Theme
export const light_yellow_RadioGroupItem = n91 as Theme
export const light_yellow_Input = n91 as Theme
export const light_yellow_TextArea = n91 as Theme
const n92 = t([[12, 11],[13, 11],[14, 107],[15, 106],[16, 11],[17, 11],[18, 96],[19, 97],[20, 96],[21, 97],[22, 96],[23, 107],[24, 106],[25, 107],[26, 107],[27, 97]]) as Theme

export const light_yellow_SwitchThumb = n92 as Theme
const n93 = t([[12, 105],[13, 104],[14, 103],[15, 101],[16, 106],[17, 107],[18, 96],[19, 97],[20, 96],[21, 97],[22, 97],[23, 103],[24, 101],[25, 103],[26, 103],[27, 101]]) as Theme

export const light_yellow_SliderTrackActive = n93 as Theme
const n94 = t([[12, 107],[13, 106],[14, 105],[15, 104],[16, 11],[17, 214],[18, 96],[19, 97],[20, 96],[21, 97],[22, 213],[23, 105],[24, 104],[25, 105],[26, 105],[27, 99]]) as Theme

export const light_yellow_SliderThumb = n94 as Theme
export const light_yellow_Tooltip = n94 as Theme
export const light_yellow_ProgressIndicator = n94 as Theme
const n95 = t([[12, 36],[13, 37],[14, 38],[15, 39],[16, 36],[17, 36],[18, 11],[19, 47],[20, 11],[21, 47],[22, 11],[23, 38],[24, 39],[25, 38],[26, 38],[27, 46]]) as Theme

export const light_green_ListItem = n95 as Theme
const n96 = t([[12, 38],[13, 39],[14, 40],[15, 41],[16, 37],[17, 36],[18, 11],[19, 47],[20, 11],[21, 47],[22, 11],[23, 40],[24, 41],[25, 40],[26, 40],[27, 44]]) as Theme

export const light_green_Card = n96 as Theme
export const light_green_DrawerFrame = n96 as Theme
export const light_green_Progress = n96 as Theme
export const light_green_TooltipArrow = n96 as Theme
const n97 = t([[12, 39],[13, 40],[14, 41],[15, 43],[16, 38],[17, 37],[18, 11],[19, 47],[20, 11],[21, 47],[22, 47],[23, 40],[24, 41],[25, 40],[26, 40],[27, 43]]) as Theme

export const light_green_Button = n97 as Theme
export const light_green_Switch = n97 as Theme
export const light_green_TooltipContent = n97 as Theme
export const light_green_SliderTrack = n97 as Theme
const n98 = t([[12, 37],[13, 38],[14, 39],[15, 40],[16, 36],[17, 215],[18, 11],[19, 47],[20, 11],[21, 47],[22, 216],[23, 41],[24, 43],[25, 41],[26, 41],[27, 45]]) as Theme

export const light_green_Checkbox = n98 as Theme
export const light_green_RadioGroupItem = n98 as Theme
export const light_green_Input = n98 as Theme
export const light_green_TextArea = n98 as Theme
const n99 = t([[12, 11],[13, 11],[14, 47],[15, 46],[16, 11],[17, 11],[18, 36],[19, 37],[20, 36],[21, 37],[22, 36],[23, 47],[24, 46],[25, 47],[26, 47],[27, 37]]) as Theme

export const light_green_SwitchThumb = n99 as Theme
const n100 = t([[12, 45],[13, 44],[14, 43],[15, 41],[16, 46],[17, 47],[18, 36],[19, 37],[20, 36],[21, 37],[22, 37],[23, 43],[24, 41],[25, 43],[26, 43],[27, 41]]) as Theme

export const light_green_SliderTrackActive = n100 as Theme
const n101 = t([[12, 47],[13, 46],[14, 45],[15, 44],[16, 11],[17, 216],[18, 36],[19, 37],[20, 36],[21, 37],[22, 215],[23, 45],[24, 44],[25, 45],[26, 45],[27, 39]]) as Theme

export const light_green_SliderThumb = n101 as Theme
export const light_green_Tooltip = n101 as Theme
export const light_green_ProgressIndicator = n101 as Theme
const n102 = t([[12, 14],[13, 15],[14, 16],[15, 17],[16, 14],[17, 14],[18, 11],[19, 25],[20, 11],[21, 25],[22, 11],[23, 16],[24, 17],[25, 16],[26, 16],[27, 24]]) as Theme

export const light_blue_ListItem = n102 as Theme
const n103 = t([[12, 16],[13, 17],[14, 18],[15, 19],[16, 15],[17, 14],[18, 11],[19, 25],[20, 11],[21, 25],[22, 11],[23, 18],[24, 19],[25, 18],[26, 18],[27, 22]]) as Theme

export const light_blue_Card = n103 as Theme
export const light_blue_DrawerFrame = n103 as Theme
export const light_blue_Progress = n103 as Theme
export const light_blue_TooltipArrow = n103 as Theme
const n104 = t([[12, 17],[13, 18],[14, 19],[15, 21],[16, 16],[17, 15],[18, 11],[19, 25],[20, 11],[21, 25],[22, 25],[23, 18],[24, 19],[25, 18],[26, 18],[27, 21]]) as Theme

export const light_blue_Button = n104 as Theme
export const light_blue_Switch = n104 as Theme
export const light_blue_TooltipContent = n104 as Theme
export const light_blue_SliderTrack = n104 as Theme
const n105 = t([[12, 15],[13, 16],[14, 17],[15, 18],[16, 14],[17, 217],[18, 11],[19, 25],[20, 11],[21, 25],[22, 218],[23, 19],[24, 21],[25, 19],[26, 19],[27, 23]]) as Theme

export const light_blue_Checkbox = n105 as Theme
export const light_blue_RadioGroupItem = n105 as Theme
export const light_blue_Input = n105 as Theme
export const light_blue_TextArea = n105 as Theme
const n106 = t([[12, 11],[13, 11],[14, 25],[15, 24],[16, 11],[17, 11],[18, 14],[19, 15],[20, 14],[21, 15],[22, 14],[23, 25],[24, 24],[25, 25],[26, 25],[27, 15]]) as Theme

export const light_blue_SwitchThumb = n106 as Theme
const n107 = t([[12, 23],[13, 22],[14, 21],[15, 19],[16, 24],[17, 25],[18, 14],[19, 15],[20, 14],[21, 15],[22, 15],[23, 21],[24, 19],[25, 21],[26, 21],[27, 19]]) as Theme

export const light_blue_SliderTrackActive = n107 as Theme
const n108 = t([[12, 25],[13, 24],[14, 23],[15, 22],[16, 11],[17, 218],[18, 14],[19, 15],[20, 14],[21, 15],[22, 217],[23, 23],[24, 22],[25, 23],[26, 23],[27, 17]]) as Theme

export const light_blue_SliderThumb = n108 as Theme
export const light_blue_Tooltip = n108 as Theme
export const light_blue_ProgressIndicator = n108 as Theme
const n109 = t([[12, 72],[13, 73],[14, 74],[15, 75],[16, 72],[17, 72],[18, 11],[19, 83],[20, 11],[21, 83],[22, 11],[23, 74],[24, 75],[25, 74],[26, 74],[27, 82]]) as Theme

export const light_purple_ListItem = n109 as Theme
const n110 = t([[12, 74],[13, 75],[14, 76],[15, 77],[16, 73],[17, 72],[18, 11],[19, 83],[20, 11],[21, 83],[22, 11],[23, 76],[24, 77],[25, 76],[26, 76],[27, 80]]) as Theme

export const light_purple_Card = n110 as Theme
export const light_purple_DrawerFrame = n110 as Theme
export const light_purple_Progress = n110 as Theme
export const light_purple_TooltipArrow = n110 as Theme
const n111 = t([[12, 75],[13, 76],[14, 77],[15, 79],[16, 74],[17, 73],[18, 11],[19, 83],[20, 11],[21, 83],[22, 83],[23, 76],[24, 77],[25, 76],[26, 76],[27, 79]]) as Theme

export const light_purple_Button = n111 as Theme
export const light_purple_Switch = n111 as Theme
export const light_purple_TooltipContent = n111 as Theme
export const light_purple_SliderTrack = n111 as Theme
const n112 = t([[12, 73],[13, 74],[14, 75],[15, 76],[16, 72],[17, 219],[18, 11],[19, 83],[20, 11],[21, 83],[22, 220],[23, 77],[24, 79],[25, 77],[26, 77],[27, 81]]) as Theme

export const light_purple_Checkbox = n112 as Theme
export const light_purple_RadioGroupItem = n112 as Theme
export const light_purple_Input = n112 as Theme
export const light_purple_TextArea = n112 as Theme
const n113 = t([[12, 11],[13, 11],[14, 83],[15, 82],[16, 11],[17, 11],[18, 72],[19, 73],[20, 72],[21, 73],[22, 72],[23, 83],[24, 82],[25, 83],[26, 83],[27, 73]]) as Theme

export const light_purple_SwitchThumb = n113 as Theme
const n114 = t([[12, 81],[13, 80],[14, 79],[15, 77],[16, 82],[17, 83],[18, 72],[19, 73],[20, 72],[21, 73],[22, 73],[23, 79],[24, 77],[25, 79],[26, 79],[27, 77]]) as Theme

export const light_purple_SliderTrackActive = n114 as Theme
const n115 = t([[12, 83],[13, 82],[14, 81],[15, 80],[16, 11],[17, 220],[18, 72],[19, 73],[20, 72],[21, 73],[22, 219],[23, 81],[24, 80],[25, 81],[26, 81],[27, 75]]) as Theme

export const light_purple_SliderThumb = n115 as Theme
export const light_purple_Tooltip = n115 as Theme
export const light_purple_ProgressIndicator = n115 as Theme
const n116 = t([[12, 60],[13, 61],[14, 62],[15, 63],[16, 60],[17, 60],[18, 11],[19, 71],[20, 11],[21, 71],[22, 11],[23, 62],[24, 63],[25, 62],[26, 62],[27, 70]]) as Theme

export const light_pink_ListItem = n116 as Theme
const n117 = t([[12, 62],[13, 63],[14, 64],[15, 65],[16, 61],[17, 60],[18, 11],[19, 71],[20, 11],[21, 71],[22, 11],[23, 64],[24, 65],[25, 64],[26, 64],[27, 68]]) as Theme

export const light_pink_Card = n117 as Theme
export const light_pink_DrawerFrame = n117 as Theme
export const light_pink_Progress = n117 as Theme
export const light_pink_TooltipArrow = n117 as Theme
const n118 = t([[12, 63],[13, 64],[14, 65],[15, 67],[16, 62],[17, 61],[18, 11],[19, 71],[20, 11],[21, 71],[22, 71],[23, 64],[24, 65],[25, 64],[26, 64],[27, 67]]) as Theme

export const light_pink_Button = n118 as Theme
export const light_pink_Switch = n118 as Theme
export const light_pink_TooltipContent = n118 as Theme
export const light_pink_SliderTrack = n118 as Theme
const n119 = t([[12, 61],[13, 62],[14, 63],[15, 64],[16, 60],[17, 221],[18, 11],[19, 71],[20, 11],[21, 71],[22, 222],[23, 65],[24, 67],[25, 65],[26, 65],[27, 69]]) as Theme

export const light_pink_Checkbox = n119 as Theme
export const light_pink_RadioGroupItem = n119 as Theme
export const light_pink_Input = n119 as Theme
export const light_pink_TextArea = n119 as Theme
const n120 = t([[12, 11],[13, 11],[14, 71],[15, 70],[16, 11],[17, 11],[18, 60],[19, 61],[20, 60],[21, 61],[22, 60],[23, 71],[24, 70],[25, 71],[26, 71],[27, 61]]) as Theme

export const light_pink_SwitchThumb = n120 as Theme
const n121 = t([[12, 69],[13, 68],[14, 67],[15, 65],[16, 70],[17, 71],[18, 60],[19, 61],[20, 60],[21, 61],[22, 61],[23, 67],[24, 65],[25, 67],[26, 67],[27, 65]]) as Theme

export const light_pink_SliderTrackActive = n121 as Theme
const n122 = t([[12, 71],[13, 70],[14, 69],[15, 68],[16, 11],[17, 222],[18, 60],[19, 61],[20, 60],[21, 61],[22, 221],[23, 69],[24, 68],[25, 69],[26, 69],[27, 63]]) as Theme

export const light_pink_SliderThumb = n122 as Theme
export const light_pink_Tooltip = n122 as Theme
export const light_pink_ProgressIndicator = n122 as Theme
const n123 = t([[12, 84],[13, 85],[14, 86],[15, 87],[16, 84],[17, 84],[18, 11],[19, 95],[20, 11],[21, 95],[22, 11],[23, 86],[24, 87],[25, 86],[26, 86],[27, 94]]) as Theme

export const light_red_ListItem = n123 as Theme
const n124 = t([[12, 86],[13, 87],[14, 88],[15, 89],[16, 85],[17, 84],[18, 11],[19, 95],[20, 11],[21, 95],[22, 11],[23, 88],[24, 89],[25, 88],[26, 88],[27, 92]]) as Theme

export const light_red_Card = n124 as Theme
export const light_red_DrawerFrame = n124 as Theme
export const light_red_Progress = n124 as Theme
export const light_red_TooltipArrow = n124 as Theme
const n125 = t([[12, 87],[13, 88],[14, 89],[15, 91],[16, 86],[17, 85],[18, 11],[19, 95],[20, 11],[21, 95],[22, 95],[23, 88],[24, 89],[25, 88],[26, 88],[27, 91]]) as Theme

export const light_red_Button = n125 as Theme
export const light_red_Switch = n125 as Theme
export const light_red_TooltipContent = n125 as Theme
export const light_red_SliderTrack = n125 as Theme
const n126 = t([[12, 85],[13, 86],[14, 87],[15, 88],[16, 84],[17, 223],[18, 11],[19, 95],[20, 11],[21, 95],[22, 224],[23, 89],[24, 91],[25, 89],[26, 89],[27, 93]]) as Theme

export const light_red_Checkbox = n126 as Theme
export const light_red_RadioGroupItem = n126 as Theme
export const light_red_Input = n126 as Theme
export const light_red_TextArea = n126 as Theme
const n127 = t([[12, 11],[13, 11],[14, 95],[15, 94],[16, 11],[17, 11],[18, 84],[19, 85],[20, 84],[21, 85],[22, 84],[23, 95],[24, 94],[25, 95],[26, 95],[27, 85]]) as Theme

export const light_red_SwitchThumb = n127 as Theme
const n128 = t([[12, 93],[13, 92],[14, 91],[15, 89],[16, 94],[17, 95],[18, 84],[19, 85],[20, 84],[21, 85],[22, 85],[23, 91],[24, 89],[25, 91],[26, 91],[27, 89]]) as Theme

export const light_red_SliderTrackActive = n128 as Theme
const n129 = t([[12, 95],[13, 94],[14, 93],[15, 92],[16, 11],[17, 224],[18, 84],[19, 85],[20, 84],[21, 85],[22, 223],[23, 93],[24, 92],[25, 93],[26, 93],[27, 87]]) as Theme

export const light_red_SliderThumb = n129 as Theme
export const light_red_Tooltip = n129 as Theme
export const light_red_ProgressIndicator = n129 as Theme
const n130 = t([[12, 156],[13, 157],[14, 158],[15, 159],[16, 155],[17, 154],[18, 0],[19, 164],[20, 0],[21, 164],[22, 0],[23, 159],[24, 161],[25, 158],[26, 159],[27, 56]]) as Theme

export const dark_orange_Card = n130 as Theme
export const dark_orange_DrawerFrame = n130 as Theme
export const dark_orange_Progress = n130 as Theme
export const dark_orange_TooltipArrow = n130 as Theme
const n131 = t([[12, 157],[13, 158],[14, 159],[15, 161],[16, 156],[17, 155],[18, 0],[19, 164],[20, 0],[21, 164],[22, 164],[23, 159],[24, 161],[25, 158],[26, 159],[27, 161]]) as Theme

export const dark_orange_Button = n131 as Theme
export const dark_orange_Switch = n131 as Theme
export const dark_orange_TooltipContent = n131 as Theme
export const dark_orange_SliderTrack = n131 as Theme
const n132 = t([[12, 155],[13, 156],[14, 157],[15, 158],[16, 154],[17, 225],[18, 0],[19, 164],[20, 0],[21, 164],[22, 226],[23, 161],[24, 56],[25, 159],[26, 161],[27, 162]]) as Theme

export const dark_orange_Checkbox = n132 as Theme
export const dark_orange_RadioGroupItem = n132 as Theme
export const dark_orange_Input = n132 as Theme
export const dark_orange_TextArea = n132 as Theme
const n133 = t([[12, 0],[13, 0],[14, 164],[15, 163],[16, 0],[17, 0],[18, 154],[19, 155],[20, 154],[21, 155],[22, 154],[23, 163],[24, 162],[25, 164],[26, 163],[27, 155]]) as Theme

export const dark_orange_SwitchThumb = n133 as Theme
const n134 = t([[12, 162],[13, 56],[14, 161],[15, 159],[16, 163],[17, 164],[18, 154],[19, 155],[20, 154],[21, 155],[22, 155],[23, 159],[24, 158],[25, 161],[26, 159],[27, 159]]) as Theme

export const dark_orange_SliderTrackActive = n134 as Theme
const n135 = t([[12, 164],[13, 163],[14, 162],[15, 56],[16, 0],[17, 226],[18, 154],[19, 155],[20, 154],[21, 155],[22, 225],[23, 56],[24, 161],[25, 162],[26, 56],[27, 157]]) as Theme

export const dark_orange_SliderThumb = n135 as Theme
export const dark_orange_Tooltip = n135 as Theme
export const dark_orange_ProgressIndicator = n135 as Theme
const n136 = t([[12, 200],[13, 201],[14, 202],[15, 203],[16, 199],[17, 198],[18, 0],[19, 208],[20, 0],[21, 208],[22, 0],[23, 203],[24, 205],[25, 202],[26, 203],[27, 104]]) as Theme

export const dark_yellow_Card = n136 as Theme
export const dark_yellow_DrawerFrame = n136 as Theme
export const dark_yellow_Progress = n136 as Theme
export const dark_yellow_TooltipArrow = n136 as Theme
const n137 = t([[12, 201],[13, 202],[14, 203],[15, 205],[16, 200],[17, 199],[18, 0],[19, 208],[20, 0],[21, 208],[22, 208],[23, 203],[24, 205],[25, 202],[26, 203],[27, 205]]) as Theme

export const dark_yellow_Button = n137 as Theme
export const dark_yellow_Switch = n137 as Theme
export const dark_yellow_TooltipContent = n137 as Theme
export const dark_yellow_SliderTrack = n137 as Theme
const n138 = t([[12, 199],[13, 200],[14, 201],[15, 202],[16, 198],[17, 227],[18, 0],[19, 208],[20, 0],[21, 208],[22, 228],[23, 205],[24, 104],[25, 203],[26, 205],[27, 206]]) as Theme

export const dark_yellow_Checkbox = n138 as Theme
export const dark_yellow_RadioGroupItem = n138 as Theme
export const dark_yellow_Input = n138 as Theme
export const dark_yellow_TextArea = n138 as Theme
const n139 = t([[12, 0],[13, 0],[14, 208],[15, 207],[16, 0],[17, 0],[18, 198],[19, 199],[20, 198],[21, 199],[22, 198],[23, 207],[24, 206],[25, 208],[26, 207],[27, 199]]) as Theme

export const dark_yellow_SwitchThumb = n139 as Theme
const n140 = t([[12, 206],[13, 104],[14, 205],[15, 203],[16, 207],[17, 208],[18, 198],[19, 199],[20, 198],[21, 199],[22, 199],[23, 203],[24, 202],[25, 205],[26, 203],[27, 203]]) as Theme

export const dark_yellow_SliderTrackActive = n140 as Theme
const n141 = t([[12, 208],[13, 207],[14, 206],[15, 104],[16, 0],[17, 228],[18, 198],[19, 199],[20, 198],[21, 199],[22, 227],[23, 104],[24, 205],[25, 206],[26, 104],[27, 201]]) as Theme

export const dark_yellow_SliderThumb = n141 as Theme
export const dark_yellow_Tooltip = n141 as Theme
export const dark_yellow_ProgressIndicator = n141 as Theme
const n142 = t([[12, 145],[13, 146],[14, 147],[15, 148],[16, 144],[17, 143],[18, 0],[19, 153],[20, 0],[21, 153],[22, 0],[23, 148],[24, 150],[25, 147],[26, 148],[27, 44]]) as Theme

export const dark_green_Card = n142 as Theme
export const dark_green_DrawerFrame = n142 as Theme
export const dark_green_Progress = n142 as Theme
export const dark_green_TooltipArrow = n142 as Theme
const n143 = t([[12, 146],[13, 147],[14, 148],[15, 150],[16, 145],[17, 144],[18, 0],[19, 153],[20, 0],[21, 153],[22, 153],[23, 148],[24, 150],[25, 147],[26, 148],[27, 150]]) as Theme

export const dark_green_Button = n143 as Theme
export const dark_green_Switch = n143 as Theme
export const dark_green_TooltipContent = n143 as Theme
export const dark_green_SliderTrack = n143 as Theme
const n144 = t([[12, 144],[13, 145],[14, 146],[15, 147],[16, 143],[17, 229],[18, 0],[19, 153],[20, 0],[21, 153],[22, 230],[23, 150],[24, 44],[25, 148],[26, 150],[27, 151]]) as Theme

export const dark_green_Checkbox = n144 as Theme
export const dark_green_RadioGroupItem = n144 as Theme
export const dark_green_Input = n144 as Theme
export const dark_green_TextArea = n144 as Theme
const n145 = t([[12, 0],[13, 0],[14, 153],[15, 152],[16, 0],[17, 0],[18, 143],[19, 144],[20, 143],[21, 144],[22, 143],[23, 152],[24, 151],[25, 153],[26, 152],[27, 144]]) as Theme

export const dark_green_SwitchThumb = n145 as Theme
const n146 = t([[12, 151],[13, 44],[14, 150],[15, 148],[16, 152],[17, 153],[18, 143],[19, 144],[20, 143],[21, 144],[22, 144],[23, 148],[24, 147],[25, 150],[26, 148],[27, 148]]) as Theme

export const dark_green_SliderTrackActive = n146 as Theme
const n147 = t([[12, 153],[13, 152],[14, 151],[15, 44],[16, 0],[17, 230],[18, 143],[19, 144],[20, 143],[21, 144],[22, 229],[23, 44],[24, 150],[25, 151],[26, 44],[27, 146]]) as Theme

export const dark_green_SliderThumb = n147 as Theme
export const dark_green_Tooltip = n147 as Theme
export const dark_green_ProgressIndicator = n147 as Theme
const n148 = t([[12, 123],[13, 124],[14, 125],[15, 126],[16, 122],[17, 121],[18, 0],[19, 131],[20, 0],[21, 131],[22, 0],[23, 126],[24, 128],[25, 125],[26, 126],[27, 22]]) as Theme

export const dark_blue_Card = n148 as Theme
export const dark_blue_DrawerFrame = n148 as Theme
export const dark_blue_Progress = n148 as Theme
export const dark_blue_TooltipArrow = n148 as Theme
const n149 = t([[12, 124],[13, 125],[14, 126],[15, 128],[16, 123],[17, 122],[18, 0],[19, 131],[20, 0],[21, 131],[22, 131],[23, 126],[24, 128],[25, 125],[26, 126],[27, 128]]) as Theme

export const dark_blue_Button = n149 as Theme
export const dark_blue_Switch = n149 as Theme
export const dark_blue_TooltipContent = n149 as Theme
export const dark_blue_SliderTrack = n149 as Theme
const n150 = t([[12, 122],[13, 123],[14, 124],[15, 125],[16, 121],[17, 231],[18, 0],[19, 131],[20, 0],[21, 131],[22, 232],[23, 128],[24, 22],[25, 126],[26, 128],[27, 129]]) as Theme

export const dark_blue_Checkbox = n150 as Theme
export const dark_blue_RadioGroupItem = n150 as Theme
export const dark_blue_Input = n150 as Theme
export const dark_blue_TextArea = n150 as Theme
const n151 = t([[12, 0],[13, 0],[14, 131],[15, 130],[16, 0],[17, 0],[18, 121],[19, 122],[20, 121],[21, 122],[22, 121],[23, 130],[24, 129],[25, 131],[26, 130],[27, 122]]) as Theme

export const dark_blue_SwitchThumb = n151 as Theme
const n152 = t([[12, 129],[13, 22],[14, 128],[15, 126],[16, 130],[17, 131],[18, 121],[19, 122],[20, 121],[21, 122],[22, 122],[23, 126],[24, 125],[25, 128],[26, 126],[27, 126]]) as Theme

export const dark_blue_SliderTrackActive = n152 as Theme
const n153 = t([[12, 131],[13, 130],[14, 129],[15, 22],[16, 0],[17, 232],[18, 121],[19, 122],[20, 121],[21, 122],[22, 231],[23, 22],[24, 128],[25, 129],[26, 22],[27, 124]]) as Theme

export const dark_blue_SliderThumb = n153 as Theme
export const dark_blue_Tooltip = n153 as Theme
export const dark_blue_ProgressIndicator = n153 as Theme
const n154 = t([[12, 178],[13, 179],[14, 180],[15, 181],[16, 177],[17, 176],[18, 0],[19, 186],[20, 0],[21, 186],[22, 0],[23, 181],[24, 183],[25, 180],[26, 181],[27, 80]]) as Theme

export const dark_purple_Card = n154 as Theme
export const dark_purple_DrawerFrame = n154 as Theme
export const dark_purple_Progress = n154 as Theme
export const dark_purple_TooltipArrow = n154 as Theme
const n155 = t([[12, 179],[13, 180],[14, 181],[15, 183],[16, 178],[17, 177],[18, 0],[19, 186],[20, 0],[21, 186],[22, 186],[23, 181],[24, 183],[25, 180],[26, 181],[27, 183]]) as Theme

export const dark_purple_Button = n155 as Theme
export const dark_purple_Switch = n155 as Theme
export const dark_purple_TooltipContent = n155 as Theme
export const dark_purple_SliderTrack = n155 as Theme
const n156 = t([[12, 177],[13, 178],[14, 179],[15, 180],[16, 176],[17, 233],[18, 0],[19, 186],[20, 0],[21, 186],[22, 234],[23, 183],[24, 80],[25, 181],[26, 183],[27, 184]]) as Theme

export const dark_purple_Checkbox = n156 as Theme
export const dark_purple_RadioGroupItem = n156 as Theme
export const dark_purple_Input = n156 as Theme
export const dark_purple_TextArea = n156 as Theme
const n157 = t([[12, 0],[13, 0],[14, 186],[15, 185],[16, 0],[17, 0],[18, 176],[19, 177],[20, 176],[21, 177],[22, 176],[23, 185],[24, 184],[25, 186],[26, 185],[27, 177]]) as Theme

export const dark_purple_SwitchThumb = n157 as Theme
const n158 = t([[12, 184],[13, 80],[14, 183],[15, 181],[16, 185],[17, 186],[18, 176],[19, 177],[20, 176],[21, 177],[22, 177],[23, 181],[24, 180],[25, 183],[26, 181],[27, 181]]) as Theme

export const dark_purple_SliderTrackActive = n158 as Theme
const n159 = t([[12, 186],[13, 185],[14, 184],[15, 80],[16, 0],[17, 234],[18, 176],[19, 177],[20, 176],[21, 177],[22, 233],[23, 80],[24, 183],[25, 184],[26, 80],[27, 179]]) as Theme

export const dark_purple_SliderThumb = n159 as Theme
export const dark_purple_Tooltip = n159 as Theme
export const dark_purple_ProgressIndicator = n159 as Theme
const n160 = t([[12, 167],[13, 168],[14, 169],[15, 170],[16, 166],[17, 165],[18, 0],[19, 175],[20, 0],[21, 175],[22, 0],[23, 170],[24, 172],[25, 169],[26, 170],[27, 68]]) as Theme

export const dark_pink_Card = n160 as Theme
export const dark_pink_DrawerFrame = n160 as Theme
export const dark_pink_Progress = n160 as Theme
export const dark_pink_TooltipArrow = n160 as Theme
const n161 = t([[12, 168],[13, 169],[14, 170],[15, 172],[16, 167],[17, 166],[18, 0],[19, 175],[20, 0],[21, 175],[22, 175],[23, 170],[24, 172],[25, 169],[26, 170],[27, 172]]) as Theme

export const dark_pink_Button = n161 as Theme
export const dark_pink_Switch = n161 as Theme
export const dark_pink_TooltipContent = n161 as Theme
export const dark_pink_SliderTrack = n161 as Theme
const n162 = t([[12, 166],[13, 167],[14, 168],[15, 169],[16, 165],[17, 235],[18, 0],[19, 175],[20, 0],[21, 175],[22, 236],[23, 172],[24, 68],[25, 170],[26, 172],[27, 173]]) as Theme

export const dark_pink_Checkbox = n162 as Theme
export const dark_pink_RadioGroupItem = n162 as Theme
export const dark_pink_Input = n162 as Theme
export const dark_pink_TextArea = n162 as Theme
const n163 = t([[12, 0],[13, 0],[14, 175],[15, 174],[16, 0],[17, 0],[18, 165],[19, 166],[20, 165],[21, 166],[22, 165],[23, 174],[24, 173],[25, 175],[26, 174],[27, 166]]) as Theme

export const dark_pink_SwitchThumb = n163 as Theme
const n164 = t([[12, 173],[13, 68],[14, 172],[15, 170],[16, 174],[17, 175],[18, 165],[19, 166],[20, 165],[21, 166],[22, 166],[23, 170],[24, 169],[25, 172],[26, 170],[27, 170]]) as Theme

export const dark_pink_SliderTrackActive = n164 as Theme
const n165 = t([[12, 175],[13, 174],[14, 173],[15, 68],[16, 0],[17, 236],[18, 165],[19, 166],[20, 165],[21, 166],[22, 235],[23, 68],[24, 172],[25, 173],[26, 68],[27, 168]]) as Theme

export const dark_pink_SliderThumb = n165 as Theme
export const dark_pink_Tooltip = n165 as Theme
export const dark_pink_ProgressIndicator = n165 as Theme
const n166 = t([[12, 189],[13, 190],[14, 191],[15, 192],[16, 188],[17, 187],[18, 0],[19, 197],[20, 0],[21, 197],[22, 0],[23, 192],[24, 194],[25, 191],[26, 192],[27, 92]]) as Theme

export const dark_red_Card = n166 as Theme
export const dark_red_DrawerFrame = n166 as Theme
export const dark_red_Progress = n166 as Theme
export const dark_red_TooltipArrow = n166 as Theme
const n167 = t([[12, 190],[13, 191],[14, 192],[15, 194],[16, 189],[17, 188],[18, 0],[19, 197],[20, 0],[21, 197],[22, 197],[23, 192],[24, 194],[25, 191],[26, 192],[27, 194]]) as Theme

export const dark_red_Button = n167 as Theme
export const dark_red_Switch = n167 as Theme
export const dark_red_TooltipContent = n167 as Theme
export const dark_red_SliderTrack = n167 as Theme
const n168 = t([[12, 188],[13, 189],[14, 190],[15, 191],[16, 187],[17, 237],[18, 0],[19, 197],[20, 0],[21, 197],[22, 238],[23, 194],[24, 92],[25, 192],[26, 194],[27, 195]]) as Theme

export const dark_red_Checkbox = n168 as Theme
export const dark_red_RadioGroupItem = n168 as Theme
export const dark_red_Input = n168 as Theme
export const dark_red_TextArea = n168 as Theme
const n169 = t([[12, 0],[13, 0],[14, 197],[15, 196],[16, 0],[17, 0],[18, 187],[19, 188],[20, 187],[21, 188],[22, 187],[23, 196],[24, 195],[25, 197],[26, 196],[27, 188]]) as Theme

export const dark_red_SwitchThumb = n169 as Theme
const n170 = t([[12, 195],[13, 92],[14, 194],[15, 192],[16, 196],[17, 197],[18, 187],[19, 188],[20, 187],[21, 188],[22, 188],[23, 192],[24, 191],[25, 194],[26, 192],[27, 192]]) as Theme

export const dark_red_SliderTrackActive = n170 as Theme
const n171 = t([[12, 197],[13, 196],[14, 195],[15, 92],[16, 0],[17, 238],[18, 187],[19, 188],[20, 187],[21, 188],[22, 237],[23, 92],[24, 194],[25, 195],[26, 92],[27, 190]]) as Theme

export const dark_red_SliderThumb = n171 as Theme
export const dark_red_Tooltip = n171 as Theme
export const dark_red_ProgressIndicator = n171 as Theme
const n172 = t([[12, 1],[13, 2],[14, 3],[15, 4],[16, 0],[17, 0],[18, 10],[19, 9],[20, 10],[21, 9],[22, 11],[23, 4],[24, 5],[25, 3],[26, 4],[27, 8]]) as Theme

export const light_alt1_ListItem = n172 as Theme
const n173 = t([[12, 3],[13, 4],[14, 5],[15, 6],[16, 2],[17, 1],[18, 10],[19, 9],[20, 10],[21, 9],[22, 10],[23, 6],[24, 7],[25, 5],[26, 6],[27, 6]]) as Theme

export const light_alt1_Card = n173 as Theme
export const light_alt1_DrawerFrame = n173 as Theme
export const light_alt1_Progress = n173 as Theme
export const light_alt1_TooltipArrow = n173 as Theme
const n174 = t([[12, 4],[13, 5],[14, 6],[15, 7],[16, 3],[17, 2],[18, 10],[19, 9],[20, 10],[21, 9],[22, 9],[23, 6],[24, 7],[25, 5],[26, 6],[27, 5]]) as Theme

export const light_alt1_Button = n174 as Theme
export const light_alt1_Switch = n174 as Theme
export const light_alt1_TooltipContent = n174 as Theme
export const light_alt1_SliderTrack = n174 as Theme
const n175 = t([[12, 2],[13, 3],[14, 4],[15, 5],[16, 1],[17, 0],[18, 10],[19, 9],[20, 10],[21, 9],[22, 11],[23, 7],[24, 8],[25, 6],[26, 7],[27, 7]]) as Theme

export const light_alt1_Checkbox = n175 as Theme
export const light_alt1_RadioGroupItem = n175 as Theme
export const light_alt1_Input = n175 as Theme
export const light_alt1_TextArea = n175 as Theme
const n176 = t([[12, 11],[13, 10],[14, 9],[15, 8],[16, 11],[17, 11],[18, 1],[19, 2],[20, 1],[21, 2],[22, 0],[23, 8],[24, 7],[25, 9],[26, 8],[27, 2]]) as Theme

export const light_alt1_SwitchThumb = n176 as Theme
const n177 = t([[12, 7],[13, 6],[14, 5],[15, 4],[16, 8],[17, 9],[18, 1],[19, 2],[20, 1],[21, 2],[22, 2],[23, 4],[24, 3],[25, 5],[26, 4],[27, 6]]) as Theme

export const light_alt1_SliderTrackActive = n177 as Theme
const n178 = t([[12, 9],[13, 8],[14, 7],[15, 6],[16, 10],[17, 11],[18, 1],[19, 2],[20, 1],[21, 2],[22, 0],[23, 6],[24, 5],[25, 7],[26, 6],[27, 4]]) as Theme

export const light_alt1_SliderThumb = n178 as Theme
export const light_alt1_Tooltip = n178 as Theme
export const light_alt1_ProgressIndicator = n178 as Theme
const n179 = t([[12, 2],[13, 3],[14, 4],[15, 5],[16, 1],[17, 0],[18, 9],[19, 8],[20, 9],[21, 8],[22, 11],[23, 4],[24, 5],[25, 3],[26, 4],[27, 7]]) as Theme

export const light_alt2_ListItem = n179 as Theme
const n180 = t([[12, 4],[13, 5],[14, 6],[15, 7],[16, 3],[17, 2],[18, 9],[19, 8],[20, 9],[21, 8],[22, 9],[23, 6],[24, 7],[25, 5],[26, 6],[27, 5]]) as Theme

export const light_alt2_Card = n180 as Theme
export const light_alt2_DrawerFrame = n180 as Theme
export const light_alt2_Progress = n180 as Theme
export const light_alt2_TooltipArrow = n180 as Theme
const n181 = t([[12, 5],[13, 6],[14, 7],[15, 8],[16, 4],[17, 3],[18, 9],[19, 8],[20, 9],[21, 8],[22, 8],[23, 6],[24, 7],[25, 5],[26, 6],[27, 4]]) as Theme

export const light_alt2_Button = n181 as Theme
export const light_alt2_Switch = n181 as Theme
export const light_alt2_TooltipContent = n181 as Theme
export const light_alt2_SliderTrack = n181 as Theme
const n182 = t([[12, 3],[13, 4],[14, 5],[15, 6],[16, 2],[17, 1],[18, 9],[19, 8],[20, 9],[21, 8],[22, 10],[23, 7],[24, 8],[25, 6],[26, 7],[27, 6]]) as Theme

export const light_alt2_Checkbox = n182 as Theme
export const light_alt2_RadioGroupItem = n182 as Theme
export const light_alt2_Input = n182 as Theme
export const light_alt2_TextArea = n182 as Theme
const n183 = t([[12, 10],[13, 9],[14, 8],[15, 7],[16, 11],[17, 11],[18, 2],[19, 3],[20, 2],[21, 3],[22, 0],[23, 8],[24, 7],[25, 9],[26, 8],[27, 3]]) as Theme

export const light_alt2_SwitchThumb = n183 as Theme
const n184 = t([[12, 6],[13, 5],[14, 4],[15, 3],[16, 7],[17, 8],[18, 2],[19, 3],[20, 2],[21, 3],[22, 3],[23, 4],[24, 3],[25, 5],[26, 4],[27, 7]]) as Theme

export const light_alt2_SliderTrackActive = n184 as Theme
const n185 = t([[12, 8],[13, 7],[14, 6],[15, 5],[16, 9],[17, 10],[18, 2],[19, 3],[20, 2],[21, 3],[22, 1],[23, 6],[24, 5],[25, 7],[26, 6],[27, 5]]) as Theme

export const light_alt2_SliderThumb = n185 as Theme
export const light_alt2_Tooltip = n185 as Theme
export const light_alt2_ProgressIndicator = n185 as Theme
const n186 = t([[12, 3],[13, 4],[14, 5],[15, 6],[16, 2],[17, 1],[19, 7],[20, 8],[21, 7],[22, 10],[23, 5],[24, 6],[25, 4],[26, 5],[27, 6]]) as Theme

export const light_active_ListItem = n186 as Theme
const n187 = t([[12, 6],[13, 7],[14, 8],[15, 9],[16, 5],[17, 4],[19, 7],[20, 8],[21, 7],[22, 7],[23, 7],[24, 8],[25, 6],[26, 7],[27, 3]]) as Theme

export const light_active_Button = n187 as Theme
export const light_active_Switch = n187 as Theme
const n188 = t([[12, 4],[13, 5],[14, 6],[15, 7],[16, 3],[17, 2],[19, 7],[20, 8],[21, 7],[22, 9],[23, 8],[24, 9],[25, 7],[26, 8],[27, 5]]) as Theme

export const light_active_Checkbox = n188 as Theme
export const light_active_Input = n188 as Theme
export const light_active_TextArea = n188 as Theme
const n189 = t([[12, 5],[13, 4],[14, 3],[15, 2],[16, 6],[17, 7],[19, 4],[20, 3],[21, 4],[22, 4],[23, 3],[24, 2],[25, 4],[26, 3],[27, 8]]) as Theme

export const light_active_SliderTrackActive = n189 as Theme
const n190 = t([[12, 113],[13, 114],[14, 115],[15, 116],[16, 112],[17, 111],[18, 120],[19, 119],[20, 120],[21, 119],[22, 120],[23, 116],[24, 117],[25, 115],[26, 116],[27, 116]]) as Theme

export const dark_alt1_Card = n190 as Theme
export const dark_alt1_DrawerFrame = n190 as Theme
export const dark_alt1_Progress = n190 as Theme
export const dark_alt1_TooltipArrow = n190 as Theme
const n191 = t([[12, 114],[13, 115],[14, 116],[15, 117],[16, 113],[17, 112],[18, 120],[19, 119],[20, 120],[21, 119],[22, 119],[23, 116],[24, 117],[25, 115],[26, 116],[27, 115]]) as Theme

export const dark_alt1_Button = n191 as Theme
export const dark_alt1_Switch = n191 as Theme
export const dark_alt1_TooltipContent = n191 as Theme
export const dark_alt1_SliderTrack = n191 as Theme
const n192 = t([[12, 112],[13, 113],[14, 114],[15, 115],[16, 111],[17, 110],[18, 120],[19, 119],[20, 120],[21, 119],[22, 0],[23, 117],[24, 118],[25, 116],[26, 117],[27, 117]]) as Theme

export const dark_alt1_Checkbox = n192 as Theme
export const dark_alt1_RadioGroupItem = n192 as Theme
export const dark_alt1_Input = n192 as Theme
export const dark_alt1_TextArea = n192 as Theme
const n193 = t([[12, 0],[13, 120],[14, 119],[15, 118],[16, 0],[17, 0],[18, 111],[19, 112],[20, 111],[21, 112],[22, 110],[23, 118],[24, 117],[25, 119],[26, 118],[27, 112]]) as Theme

export const dark_alt1_SwitchThumb = n193 as Theme
const n194 = t([[12, 117],[13, 116],[14, 115],[15, 114],[16, 118],[17, 119],[18, 111],[19, 112],[20, 111],[21, 112],[22, 112],[23, 114],[24, 113],[25, 115],[26, 114],[27, 116]]) as Theme

export const dark_alt1_SliderTrackActive = n194 as Theme
const n195 = t([[12, 119],[13, 118],[14, 117],[15, 116],[16, 120],[17, 0],[18, 111],[19, 112],[20, 111],[21, 112],[22, 110],[23, 116],[24, 115],[25, 117],[26, 116],[27, 114]]) as Theme

export const dark_alt1_SliderThumb = n195 as Theme
export const dark_alt1_Tooltip = n195 as Theme
export const dark_alt1_ProgressIndicator = n195 as Theme
const n196 = t([[12, 114],[13, 115],[14, 116],[15, 117],[16, 113],[17, 112],[18, 119],[19, 118],[20, 119],[21, 118],[22, 119],[23, 116],[24, 117],[25, 115],[26, 116],[27, 115]]) as Theme

export const dark_alt2_Card = n196 as Theme
export const dark_alt2_DrawerFrame = n196 as Theme
export const dark_alt2_Progress = n196 as Theme
export const dark_alt2_TooltipArrow = n196 as Theme
const n197 = t([[12, 115],[13, 116],[14, 117],[15, 118],[16, 114],[17, 113],[18, 119],[19, 118],[20, 119],[21, 118],[22, 118],[23, 116],[24, 117],[25, 115],[26, 116],[27, 114]]) as Theme

export const dark_alt2_Button = n197 as Theme
export const dark_alt2_Switch = n197 as Theme
export const dark_alt2_TooltipContent = n197 as Theme
export const dark_alt2_SliderTrack = n197 as Theme
const n198 = t([[12, 113],[13, 114],[14, 115],[15, 116],[16, 112],[17, 111],[18, 119],[19, 118],[20, 119],[21, 118],[22, 120],[23, 117],[24, 118],[25, 116],[26, 117],[27, 116]]) as Theme

export const dark_alt2_Checkbox = n198 as Theme
export const dark_alt2_RadioGroupItem = n198 as Theme
export const dark_alt2_Input = n198 as Theme
export const dark_alt2_TextArea = n198 as Theme
const n199 = t([[12, 120],[13, 119],[14, 118],[15, 117],[16, 0],[17, 0],[18, 112],[19, 113],[20, 112],[21, 113],[22, 110],[23, 118],[24, 117],[25, 119],[26, 118],[27, 113]]) as Theme

export const dark_alt2_SwitchThumb = n199 as Theme
const n200 = t([[12, 116],[13, 115],[14, 114],[15, 113],[16, 117],[17, 118],[18, 112],[19, 113],[20, 112],[21, 113],[22, 113],[23, 114],[24, 113],[25, 115],[26, 114],[27, 117]]) as Theme

export const dark_alt2_SliderTrackActive = n200 as Theme
const n201 = t([[12, 118],[13, 117],[14, 116],[15, 115],[16, 119],[17, 120],[18, 112],[19, 113],[20, 112],[21, 113],[22, 111],[23, 116],[24, 115],[25, 117],[26, 116],[27, 115]]) as Theme

export const dark_alt2_SliderThumb = n201 as Theme
export const dark_alt2_Tooltip = n201 as Theme
export const dark_alt2_ProgressIndicator = n201 as Theme
const n202 = t([[12, 116],[13, 117],[14, 118],[15, 119],[16, 115],[17, 114],[19, 117],[20, 118],[21, 117],[22, 117],[23, 117],[24, 118],[25, 116],[26, 117],[27, 113]]) as Theme

export const dark_active_Button = n202 as Theme
export const dark_active_Switch = n202 as Theme
const n203 = t([[12, 114],[13, 115],[14, 116],[15, 117],[16, 113],[17, 112],[19, 117],[20, 118],[21, 117],[22, 119],[23, 118],[24, 119],[25, 117],[26, 118],[27, 115]]) as Theme

export const dark_active_Checkbox = n203 as Theme
export const dark_active_Input = n203 as Theme
export const dark_active_TextArea = n203 as Theme
const n204 = t([[12, 115],[13, 114],[14, 113],[15, 112],[16, 116],[17, 117],[19, 114],[20, 113],[21, 114],[22, 114],[23, 113],[24, 112],[25, 114],[26, 113],[27, 118]]) as Theme

export const dark_active_SliderTrackActive = n204 as Theme
const n205 = t([[12, 49],[13, 50],[14, 51],[15, 52],[16, 48],[17, 48],[18, 59],[19, 58],[20, 59],[21, 58],[22, 11],[23, 51],[24, 52],[25, 51],[26, 51],[27, 57]]) as Theme

export const light_orange_alt1_ListItem = n205 as Theme
const n206 = t([[12, 51],[13, 52],[14, 53],[15, 55],[16, 50],[17, 49],[18, 59],[19, 58],[20, 59],[21, 58],[22, 59],[23, 53],[24, 55],[25, 53],[26, 53],[27, 55]]) as Theme

export const light_orange_alt1_Card = n206 as Theme
export const light_orange_alt1_DrawerFrame = n206 as Theme
export const light_orange_alt1_Progress = n206 as Theme
export const light_orange_alt1_TooltipArrow = n206 as Theme
const n207 = t([[12, 52],[13, 53],[14, 55],[15, 56],[16, 51],[17, 50],[18, 59],[19, 58],[20, 59],[21, 58],[22, 58],[23, 53],[24, 55],[25, 53],[26, 53],[27, 53]]) as Theme

export const light_orange_alt1_Button = n207 as Theme
export const light_orange_alt1_Switch = n207 as Theme
export const light_orange_alt1_TooltipContent = n207 as Theme
export const light_orange_alt1_SliderTrack = n207 as Theme
const n208 = t([[12, 50],[13, 51],[14, 52],[15, 53],[16, 49],[17, 48],[18, 59],[19, 58],[20, 59],[21, 58],[22, 11],[23, 55],[24, 56],[25, 55],[26, 55],[27, 56]]) as Theme

export const light_orange_alt1_Checkbox = n208 as Theme
export const light_orange_alt1_RadioGroupItem = n208 as Theme
export const light_orange_alt1_Input = n208 as Theme
export const light_orange_alt1_TextArea = n208 as Theme
const n209 = t([[12, 11],[13, 59],[14, 58],[15, 57],[16, 11],[17, 11],[18, 49],[19, 50],[20, 49],[21, 50],[22, 48],[23, 58],[24, 57],[25, 58],[26, 58],[27, 50]]) as Theme

export const light_orange_alt1_SwitchThumb = n209 as Theme
const n210 = t([[12, 56],[13, 55],[14, 53],[15, 52],[16, 57],[17, 58],[18, 49],[19, 50],[20, 49],[21, 50],[22, 50],[23, 53],[24, 52],[25, 53],[26, 53],[27, 55]]) as Theme

export const light_orange_alt1_SliderTrackActive = n210 as Theme
const n211 = t([[12, 58],[13, 57],[14, 56],[15, 55],[16, 59],[17, 11],[18, 49],[19, 50],[20, 49],[21, 50],[22, 48],[23, 56],[24, 55],[25, 56],[26, 56],[27, 52]]) as Theme

export const light_orange_alt1_SliderThumb = n211 as Theme
export const light_orange_alt1_Tooltip = n211 as Theme
export const light_orange_alt1_ProgressIndicator = n211 as Theme
const n212 = t([[12, 50],[13, 51],[14, 52],[15, 53],[16, 49],[17, 48],[18, 58],[19, 57],[20, 58],[21, 57],[22, 11],[23, 51],[24, 52],[25, 51],[26, 51],[27, 56]]) as Theme

export const light_orange_alt2_ListItem = n212 as Theme
const n213 = t([[12, 52],[13, 53],[14, 55],[15, 56],[16, 51],[17, 50],[18, 58],[19, 57],[20, 58],[21, 57],[22, 58],[23, 53],[24, 55],[25, 53],[26, 53],[27, 53]]) as Theme

export const light_orange_alt2_Card = n213 as Theme
export const light_orange_alt2_DrawerFrame = n213 as Theme
export const light_orange_alt2_Progress = n213 as Theme
export const light_orange_alt2_TooltipArrow = n213 as Theme
const n214 = t([[12, 53],[13, 55],[14, 56],[15, 57],[16, 52],[17, 51],[18, 58],[19, 57],[20, 58],[21, 57],[22, 57],[23, 53],[24, 55],[25, 53],[26, 53],[27, 52]]) as Theme

export const light_orange_alt2_Button = n214 as Theme
export const light_orange_alt2_Switch = n214 as Theme
export const light_orange_alt2_TooltipContent = n214 as Theme
export const light_orange_alt2_SliderTrack = n214 as Theme
const n215 = t([[12, 51],[13, 52],[14, 53],[15, 55],[16, 50],[17, 49],[18, 58],[19, 57],[20, 58],[21, 57],[22, 59],[23, 55],[24, 56],[25, 55],[26, 55],[27, 55]]) as Theme

export const light_orange_alt2_Checkbox = n215 as Theme
export const light_orange_alt2_RadioGroupItem = n215 as Theme
export const light_orange_alt2_Input = n215 as Theme
export const light_orange_alt2_TextArea = n215 as Theme
const n216 = t([[12, 59],[13, 58],[14, 57],[15, 56],[16, 11],[17, 11],[18, 50],[19, 51],[20, 50],[21, 51],[22, 48],[23, 58],[24, 57],[25, 58],[26, 58],[27, 51]]) as Theme

export const light_orange_alt2_SwitchThumb = n216 as Theme
const n217 = t([[12, 55],[13, 53],[14, 52],[15, 51],[16, 56],[17, 57],[18, 50],[19, 51],[20, 50],[21, 51],[22, 51],[23, 53],[24, 52],[25, 53],[26, 53],[27, 56]]) as Theme

export const light_orange_alt2_SliderTrackActive = n217 as Theme
const n218 = t([[12, 57],[13, 56],[14, 55],[15, 53],[16, 58],[17, 59],[18, 50],[19, 51],[20, 50],[21, 51],[22, 49],[23, 56],[24, 55],[25, 56],[26, 56],[27, 53]]) as Theme

export const light_orange_alt2_SliderThumb = n218 as Theme
export const light_orange_alt2_Tooltip = n218 as Theme
export const light_orange_alt2_ProgressIndicator = n218 as Theme
const n219 = t([[12, 51],[13, 52],[14, 53],[15, 55],[16, 50],[17, 49],[19, 56],[20, 57],[21, 56],[22, 59],[23, 52],[24, 53],[25, 52],[26, 52],[27, 55]]) as Theme

export const light_orange_active_ListItem = n219 as Theme
const n220 = t([[12, 55],[13, 56],[14, 57],[15, 58],[16, 53],[17, 52],[19, 56],[20, 57],[21, 56],[22, 56],[23, 55],[24, 56],[25, 55],[26, 55],[27, 51]]) as Theme

export const light_orange_active_Button = n220 as Theme
export const light_orange_active_Switch = n220 as Theme
const n221 = t([[12, 52],[13, 53],[14, 55],[15, 56],[16, 51],[17, 50],[19, 56],[20, 57],[21, 56],[22, 58],[23, 56],[24, 57],[25, 56],[26, 56],[27, 53]]) as Theme

export const light_orange_active_Checkbox = n221 as Theme
export const light_orange_active_Input = n221 as Theme
export const light_orange_active_TextArea = n221 as Theme
const n222 = t([[12, 53],[13, 52],[14, 51],[15, 50],[16, 55],[17, 56],[19, 52],[20, 51],[21, 52],[22, 52],[23, 52],[24, 51],[25, 52],[26, 52],[27, 57]]) as Theme

export const light_orange_active_SliderTrackActive = n222 as Theme
const n223 = t([[12, 97],[13, 98],[14, 99],[15, 100],[16, 96],[17, 96],[18, 107],[19, 106],[20, 107],[21, 106],[22, 11],[23, 99],[24, 100],[25, 99],[26, 99],[27, 105]]) as Theme

export const light_yellow_alt1_ListItem = n223 as Theme
const n224 = t([[12, 99],[13, 100],[14, 101],[15, 103],[16, 98],[17, 97],[18, 107],[19, 106],[20, 107],[21, 106],[22, 107],[23, 101],[24, 103],[25, 101],[26, 101],[27, 103]]) as Theme

export const light_yellow_alt1_Card = n224 as Theme
export const light_yellow_alt1_DrawerFrame = n224 as Theme
export const light_yellow_alt1_Progress = n224 as Theme
export const light_yellow_alt1_TooltipArrow = n224 as Theme
const n225 = t([[12, 100],[13, 101],[14, 103],[15, 104],[16, 99],[17, 98],[18, 107],[19, 106],[20, 107],[21, 106],[22, 106],[23, 101],[24, 103],[25, 101],[26, 101],[27, 101]]) as Theme

export const light_yellow_alt1_Button = n225 as Theme
export const light_yellow_alt1_Switch = n225 as Theme
export const light_yellow_alt1_TooltipContent = n225 as Theme
export const light_yellow_alt1_SliderTrack = n225 as Theme
const n226 = t([[12, 98],[13, 99],[14, 100],[15, 101],[16, 97],[17, 96],[18, 107],[19, 106],[20, 107],[21, 106],[22, 11],[23, 103],[24, 104],[25, 103],[26, 103],[27, 104]]) as Theme

export const light_yellow_alt1_Checkbox = n226 as Theme
export const light_yellow_alt1_RadioGroupItem = n226 as Theme
export const light_yellow_alt1_Input = n226 as Theme
export const light_yellow_alt1_TextArea = n226 as Theme
const n227 = t([[12, 11],[13, 107],[14, 106],[15, 105],[16, 11],[17, 11],[18, 97],[19, 98],[20, 97],[21, 98],[22, 96],[23, 106],[24, 105],[25, 106],[26, 106],[27, 98]]) as Theme

export const light_yellow_alt1_SwitchThumb = n227 as Theme
const n228 = t([[12, 104],[13, 103],[14, 101],[15, 100],[16, 105],[17, 106],[18, 97],[19, 98],[20, 97],[21, 98],[22, 98],[23, 101],[24, 100],[25, 101],[26, 101],[27, 103]]) as Theme

export const light_yellow_alt1_SliderTrackActive = n228 as Theme
const n229 = t([[12, 106],[13, 105],[14, 104],[15, 103],[16, 107],[17, 11],[18, 97],[19, 98],[20, 97],[21, 98],[22, 96],[23, 104],[24, 103],[25, 104],[26, 104],[27, 100]]) as Theme

export const light_yellow_alt1_SliderThumb = n229 as Theme
export const light_yellow_alt1_Tooltip = n229 as Theme
export const light_yellow_alt1_ProgressIndicator = n229 as Theme
const n230 = t([[12, 98],[13, 99],[14, 100],[15, 101],[16, 97],[17, 96],[18, 106],[19, 105],[20, 106],[21, 105],[22, 11],[23, 99],[24, 100],[25, 99],[26, 99],[27, 104]]) as Theme

export const light_yellow_alt2_ListItem = n230 as Theme
const n231 = t([[12, 100],[13, 101],[14, 103],[15, 104],[16, 99],[17, 98],[18, 106],[19, 105],[20, 106],[21, 105],[22, 106],[23, 101],[24, 103],[25, 101],[26, 101],[27, 101]]) as Theme

export const light_yellow_alt2_Card = n231 as Theme
export const light_yellow_alt2_DrawerFrame = n231 as Theme
export const light_yellow_alt2_Progress = n231 as Theme
export const light_yellow_alt2_TooltipArrow = n231 as Theme
const n232 = t([[12, 101],[13, 103],[14, 104],[15, 105],[16, 100],[17, 99],[18, 106],[19, 105],[20, 106],[21, 105],[22, 105],[23, 101],[24, 103],[25, 101],[26, 101],[27, 100]]) as Theme

export const light_yellow_alt2_Button = n232 as Theme
export const light_yellow_alt2_Switch = n232 as Theme
export const light_yellow_alt2_TooltipContent = n232 as Theme
export const light_yellow_alt2_SliderTrack = n232 as Theme
const n233 = t([[12, 99],[13, 100],[14, 101],[15, 103],[16, 98],[17, 97],[18, 106],[19, 105],[20, 106],[21, 105],[22, 107],[23, 103],[24, 104],[25, 103],[26, 103],[27, 103]]) as Theme

export const light_yellow_alt2_Checkbox = n233 as Theme
export const light_yellow_alt2_RadioGroupItem = n233 as Theme
export const light_yellow_alt2_Input = n233 as Theme
export const light_yellow_alt2_TextArea = n233 as Theme
const n234 = t([[12, 107],[13, 106],[14, 105],[15, 104],[16, 11],[17, 11],[18, 98],[19, 99],[20, 98],[21, 99],[22, 96],[23, 106],[24, 105],[25, 106],[26, 106],[27, 99]]) as Theme

export const light_yellow_alt2_SwitchThumb = n234 as Theme
const n235 = t([[12, 103],[13, 101],[14, 100],[15, 99],[16, 104],[17, 105],[18, 98],[19, 99],[20, 98],[21, 99],[22, 99],[23, 101],[24, 100],[25, 101],[26, 101],[27, 104]]) as Theme

export const light_yellow_alt2_SliderTrackActive = n235 as Theme
const n236 = t([[12, 105],[13, 104],[14, 103],[15, 101],[16, 106],[17, 107],[18, 98],[19, 99],[20, 98],[21, 99],[22, 97],[23, 104],[24, 103],[25, 104],[26, 104],[27, 101]]) as Theme

export const light_yellow_alt2_SliderThumb = n236 as Theme
export const light_yellow_alt2_Tooltip = n236 as Theme
export const light_yellow_alt2_ProgressIndicator = n236 as Theme
const n237 = t([[12, 99],[13, 100],[14, 101],[15, 103],[16, 98],[17, 97],[19, 104],[20, 105],[21, 104],[22, 107],[23, 100],[24, 101],[25, 100],[26, 100],[27, 103]]) as Theme

export const light_yellow_active_ListItem = n237 as Theme
const n238 = t([[12, 103],[13, 104],[14, 105],[15, 106],[16, 101],[17, 100],[19, 104],[20, 105],[21, 104],[22, 104],[23, 103],[24, 104],[25, 103],[26, 103],[27, 99]]) as Theme

export const light_yellow_active_Button = n238 as Theme
export const light_yellow_active_Switch = n238 as Theme
const n239 = t([[12, 100],[13, 101],[14, 103],[15, 104],[16, 99],[17, 98],[19, 104],[20, 105],[21, 104],[22, 106],[23, 104],[24, 105],[25, 104],[26, 104],[27, 101]]) as Theme

export const light_yellow_active_Checkbox = n239 as Theme
export const light_yellow_active_Input = n239 as Theme
export const light_yellow_active_TextArea = n239 as Theme
const n240 = t([[12, 101],[13, 100],[14, 99],[15, 98],[16, 103],[17, 104],[19, 100],[20, 99],[21, 100],[22, 100],[23, 100],[24, 99],[25, 100],[26, 100],[27, 105]]) as Theme

export const light_yellow_active_SliderTrackActive = n240 as Theme
const n241 = t([[12, 37],[13, 38],[14, 39],[15, 40],[16, 36],[17, 36],[18, 47],[19, 46],[20, 47],[21, 46],[22, 11],[23, 39],[24, 40],[25, 39],[26, 39],[27, 45]]) as Theme

export const light_green_alt1_ListItem = n241 as Theme
const n242 = t([[12, 39],[13, 40],[14, 41],[15, 43],[16, 38],[17, 37],[18, 47],[19, 46],[20, 47],[21, 46],[22, 47],[23, 41],[24, 43],[25, 41],[26, 41],[27, 43]]) as Theme

export const light_green_alt1_Card = n242 as Theme
export const light_green_alt1_DrawerFrame = n242 as Theme
export const light_green_alt1_Progress = n242 as Theme
export const light_green_alt1_TooltipArrow = n242 as Theme
const n243 = t([[12, 40],[13, 41],[14, 43],[15, 44],[16, 39],[17, 38],[18, 47],[19, 46],[20, 47],[21, 46],[22, 46],[23, 41],[24, 43],[25, 41],[26, 41],[27, 41]]) as Theme

export const light_green_alt1_Button = n243 as Theme
export const light_green_alt1_Switch = n243 as Theme
export const light_green_alt1_TooltipContent = n243 as Theme
export const light_green_alt1_SliderTrack = n243 as Theme
const n244 = t([[12, 38],[13, 39],[14, 40],[15, 41],[16, 37],[17, 36],[18, 47],[19, 46],[20, 47],[21, 46],[22, 11],[23, 43],[24, 44],[25, 43],[26, 43],[27, 44]]) as Theme

export const light_green_alt1_Checkbox = n244 as Theme
export const light_green_alt1_RadioGroupItem = n244 as Theme
export const light_green_alt1_Input = n244 as Theme
export const light_green_alt1_TextArea = n244 as Theme
const n245 = t([[12, 11],[13, 47],[14, 46],[15, 45],[16, 11],[17, 11],[18, 37],[19, 38],[20, 37],[21, 38],[22, 36],[23, 46],[24, 45],[25, 46],[26, 46],[27, 38]]) as Theme

export const light_green_alt1_SwitchThumb = n245 as Theme
const n246 = t([[12, 44],[13, 43],[14, 41],[15, 40],[16, 45],[17, 46],[18, 37],[19, 38],[20, 37],[21, 38],[22, 38],[23, 41],[24, 40],[25, 41],[26, 41],[27, 43]]) as Theme

export const light_green_alt1_SliderTrackActive = n246 as Theme
const n247 = t([[12, 46],[13, 45],[14, 44],[15, 43],[16, 47],[17, 11],[18, 37],[19, 38],[20, 37],[21, 38],[22, 36],[23, 44],[24, 43],[25, 44],[26, 44],[27, 40]]) as Theme

export const light_green_alt1_SliderThumb = n247 as Theme
export const light_green_alt1_Tooltip = n247 as Theme
export const light_green_alt1_ProgressIndicator = n247 as Theme
const n248 = t([[12, 38],[13, 39],[14, 40],[15, 41],[16, 37],[17, 36],[18, 46],[19, 45],[20, 46],[21, 45],[22, 11],[23, 39],[24, 40],[25, 39],[26, 39],[27, 44]]) as Theme

export const light_green_alt2_ListItem = n248 as Theme
const n249 = t([[12, 40],[13, 41],[14, 43],[15, 44],[16, 39],[17, 38],[18, 46],[19, 45],[20, 46],[21, 45],[22, 46],[23, 41],[24, 43],[25, 41],[26, 41],[27, 41]]) as Theme

export const light_green_alt2_Card = n249 as Theme
export const light_green_alt2_DrawerFrame = n249 as Theme
export const light_green_alt2_Progress = n249 as Theme
export const light_green_alt2_TooltipArrow = n249 as Theme
const n250 = t([[12, 41],[13, 43],[14, 44],[15, 45],[16, 40],[17, 39],[18, 46],[19, 45],[20, 46],[21, 45],[22, 45],[23, 41],[24, 43],[25, 41],[26, 41],[27, 40]]) as Theme

export const light_green_alt2_Button = n250 as Theme
export const light_green_alt2_Switch = n250 as Theme
export const light_green_alt2_TooltipContent = n250 as Theme
export const light_green_alt2_SliderTrack = n250 as Theme
const n251 = t([[12, 39],[13, 40],[14, 41],[15, 43],[16, 38],[17, 37],[18, 46],[19, 45],[20, 46],[21, 45],[22, 47],[23, 43],[24, 44],[25, 43],[26, 43],[27, 43]]) as Theme

export const light_green_alt2_Checkbox = n251 as Theme
export const light_green_alt2_RadioGroupItem = n251 as Theme
export const light_green_alt2_Input = n251 as Theme
export const light_green_alt2_TextArea = n251 as Theme
const n252 = t([[12, 47],[13, 46],[14, 45],[15, 44],[16, 11],[17, 11],[18, 38],[19, 39],[20, 38],[21, 39],[22, 36],[23, 46],[24, 45],[25, 46],[26, 46],[27, 39]]) as Theme

export const light_green_alt2_SwitchThumb = n252 as Theme
const n253 = t([[12, 43],[13, 41],[14, 40],[15, 39],[16, 44],[17, 45],[18, 38],[19, 39],[20, 38],[21, 39],[22, 39],[23, 41],[24, 40],[25, 41],[26, 41],[27, 44]]) as Theme

export const light_green_alt2_SliderTrackActive = n253 as Theme
const n254 = t([[12, 45],[13, 44],[14, 43],[15, 41],[16, 46],[17, 47],[18, 38],[19, 39],[20, 38],[21, 39],[22, 37],[23, 44],[24, 43],[25, 44],[26, 44],[27, 41]]) as Theme

export const light_green_alt2_SliderThumb = n254 as Theme
export const light_green_alt2_Tooltip = n254 as Theme
export const light_green_alt2_ProgressIndicator = n254 as Theme
const n255 = t([[12, 39],[13, 40],[14, 41],[15, 43],[16, 38],[17, 37],[19, 44],[20, 45],[21, 44],[22, 47],[23, 40],[24, 41],[25, 40],[26, 40],[27, 43]]) as Theme

export const light_green_active_ListItem = n255 as Theme
const n256 = t([[12, 43],[13, 44],[14, 45],[15, 46],[16, 41],[17, 40],[19, 44],[20, 45],[21, 44],[22, 44],[23, 43],[24, 44],[25, 43],[26, 43],[27, 39]]) as Theme

export const light_green_active_Button = n256 as Theme
export const light_green_active_Switch = n256 as Theme
const n257 = t([[12, 40],[13, 41],[14, 43],[15, 44],[16, 39],[17, 38],[19, 44],[20, 45],[21, 44],[22, 46],[23, 44],[24, 45],[25, 44],[26, 44],[27, 41]]) as Theme

export const light_green_active_Checkbox = n257 as Theme
export const light_green_active_Input = n257 as Theme
export const light_green_active_TextArea = n257 as Theme
const n258 = t([[12, 41],[13, 40],[14, 39],[15, 38],[16, 43],[17, 44],[19, 40],[20, 39],[21, 40],[22, 40],[23, 40],[24, 39],[25, 40],[26, 40],[27, 45]]) as Theme

export const light_green_active_SliderTrackActive = n258 as Theme
const n259 = t([[12, 15],[13, 16],[14, 17],[15, 18],[16, 14],[17, 14],[18, 25],[19, 24],[20, 25],[21, 24],[22, 11],[23, 17],[24, 18],[25, 17],[26, 17],[27, 23]]) as Theme

export const light_blue_alt1_ListItem = n259 as Theme
const n260 = t([[12, 17],[13, 18],[14, 19],[15, 21],[16, 16],[17, 15],[18, 25],[19, 24],[20, 25],[21, 24],[22, 25],[23, 19],[24, 21],[25, 19],[26, 19],[27, 21]]) as Theme

export const light_blue_alt1_Card = n260 as Theme
export const light_blue_alt1_DrawerFrame = n260 as Theme
export const light_blue_alt1_Progress = n260 as Theme
export const light_blue_alt1_TooltipArrow = n260 as Theme
const n261 = t([[12, 18],[13, 19],[14, 21],[15, 22],[16, 17],[17, 16],[18, 25],[19, 24],[20, 25],[21, 24],[22, 24],[23, 19],[24, 21],[25, 19],[26, 19],[27, 19]]) as Theme

export const light_blue_alt1_Button = n261 as Theme
export const light_blue_alt1_Switch = n261 as Theme
export const light_blue_alt1_TooltipContent = n261 as Theme
export const light_blue_alt1_SliderTrack = n261 as Theme
const n262 = t([[12, 16],[13, 17],[14, 18],[15, 19],[16, 15],[17, 14],[18, 25],[19, 24],[20, 25],[21, 24],[22, 11],[23, 21],[24, 22],[25, 21],[26, 21],[27, 22]]) as Theme

export const light_blue_alt1_Checkbox = n262 as Theme
export const light_blue_alt1_RadioGroupItem = n262 as Theme
export const light_blue_alt1_Input = n262 as Theme
export const light_blue_alt1_TextArea = n262 as Theme
const n263 = t([[12, 11],[13, 25],[14, 24],[15, 23],[16, 11],[17, 11],[18, 15],[19, 16],[20, 15],[21, 16],[22, 14],[23, 24],[24, 23],[25, 24],[26, 24],[27, 16]]) as Theme

export const light_blue_alt1_SwitchThumb = n263 as Theme
const n264 = t([[12, 22],[13, 21],[14, 19],[15, 18],[16, 23],[17, 24],[18, 15],[19, 16],[20, 15],[21, 16],[22, 16],[23, 19],[24, 18],[25, 19],[26, 19],[27, 21]]) as Theme

export const light_blue_alt1_SliderTrackActive = n264 as Theme
const n265 = t([[12, 24],[13, 23],[14, 22],[15, 21],[16, 25],[17, 11],[18, 15],[19, 16],[20, 15],[21, 16],[22, 14],[23, 22],[24, 21],[25, 22],[26, 22],[27, 18]]) as Theme

export const light_blue_alt1_SliderThumb = n265 as Theme
export const light_blue_alt1_Tooltip = n265 as Theme
export const light_blue_alt1_ProgressIndicator = n265 as Theme
const n266 = t([[12, 16],[13, 17],[14, 18],[15, 19],[16, 15],[17, 14],[18, 24],[19, 23],[20, 24],[21, 23],[22, 11],[23, 17],[24, 18],[25, 17],[26, 17],[27, 22]]) as Theme

export const light_blue_alt2_ListItem = n266 as Theme
const n267 = t([[12, 18],[13, 19],[14, 21],[15, 22],[16, 17],[17, 16],[18, 24],[19, 23],[20, 24],[21, 23],[22, 24],[23, 19],[24, 21],[25, 19],[26, 19],[27, 19]]) as Theme

export const light_blue_alt2_Card = n267 as Theme
export const light_blue_alt2_DrawerFrame = n267 as Theme
export const light_blue_alt2_Progress = n267 as Theme
export const light_blue_alt2_TooltipArrow = n267 as Theme
const n268 = t([[12, 19],[13, 21],[14, 22],[15, 23],[16, 18],[17, 17],[18, 24],[19, 23],[20, 24],[21, 23],[22, 23],[23, 19],[24, 21],[25, 19],[26, 19],[27, 18]]) as Theme

export const light_blue_alt2_Button = n268 as Theme
export const light_blue_alt2_Switch = n268 as Theme
export const light_blue_alt2_TooltipContent = n268 as Theme
export const light_blue_alt2_SliderTrack = n268 as Theme
const n269 = t([[12, 17],[13, 18],[14, 19],[15, 21],[16, 16],[17, 15],[18, 24],[19, 23],[20, 24],[21, 23],[22, 25],[23, 21],[24, 22],[25, 21],[26, 21],[27, 21]]) as Theme

export const light_blue_alt2_Checkbox = n269 as Theme
export const light_blue_alt2_RadioGroupItem = n269 as Theme
export const light_blue_alt2_Input = n269 as Theme
export const light_blue_alt2_TextArea = n269 as Theme
const n270 = t([[12, 25],[13, 24],[14, 23],[15, 22],[16, 11],[17, 11],[18, 16],[19, 17],[20, 16],[21, 17],[22, 14],[23, 24],[24, 23],[25, 24],[26, 24],[27, 17]]) as Theme

export const light_blue_alt2_SwitchThumb = n270 as Theme
const n271 = t([[12, 21],[13, 19],[14, 18],[15, 17],[16, 22],[17, 23],[18, 16],[19, 17],[20, 16],[21, 17],[22, 17],[23, 19],[24, 18],[25, 19],[26, 19],[27, 22]]) as Theme

export const light_blue_alt2_SliderTrackActive = n271 as Theme
const n272 = t([[12, 23],[13, 22],[14, 21],[15, 19],[16, 24],[17, 25],[18, 16],[19, 17],[20, 16],[21, 17],[22, 15],[23, 22],[24, 21],[25, 22],[26, 22],[27, 19]]) as Theme

export const light_blue_alt2_SliderThumb = n272 as Theme
export const light_blue_alt2_Tooltip = n272 as Theme
export const light_blue_alt2_ProgressIndicator = n272 as Theme
const n273 = t([[12, 17],[13, 18],[14, 19],[15, 21],[16, 16],[17, 15],[19, 22],[20, 23],[21, 22],[22, 25],[23, 18],[24, 19],[25, 18],[26, 18],[27, 21]]) as Theme

export const light_blue_active_ListItem = n273 as Theme
const n274 = t([[12, 21],[13, 22],[14, 23],[15, 24],[16, 19],[17, 18],[19, 22],[20, 23],[21, 22],[22, 22],[23, 21],[24, 22],[25, 21],[26, 21],[27, 17]]) as Theme

export const light_blue_active_Button = n274 as Theme
export const light_blue_active_Switch = n274 as Theme
const n275 = t([[12, 18],[13, 19],[14, 21],[15, 22],[16, 17],[17, 16],[19, 22],[20, 23],[21, 22],[22, 24],[23, 22],[24, 23],[25, 22],[26, 22],[27, 19]]) as Theme

export const light_blue_active_Checkbox = n275 as Theme
export const light_blue_active_Input = n275 as Theme
export const light_blue_active_TextArea = n275 as Theme
const n276 = t([[12, 19],[13, 18],[14, 17],[15, 16],[16, 21],[17, 22],[19, 18],[20, 17],[21, 18],[22, 18],[23, 18],[24, 17],[25, 18],[26, 18],[27, 23]]) as Theme

export const light_blue_active_SliderTrackActive = n276 as Theme
const n277 = t([[12, 73],[13, 74],[14, 75],[15, 76],[16, 72],[17, 72],[18, 83],[19, 82],[20, 83],[21, 82],[22, 11],[23, 75],[24, 76],[25, 75],[26, 75],[27, 81]]) as Theme

export const light_purple_alt1_ListItem = n277 as Theme
const n278 = t([[12, 75],[13, 76],[14, 77],[15, 79],[16, 74],[17, 73],[18, 83],[19, 82],[20, 83],[21, 82],[22, 83],[23, 77],[24, 79],[25, 77],[26, 77],[27, 79]]) as Theme

export const light_purple_alt1_Card = n278 as Theme
export const light_purple_alt1_DrawerFrame = n278 as Theme
export const light_purple_alt1_Progress = n278 as Theme
export const light_purple_alt1_TooltipArrow = n278 as Theme
const n279 = t([[12, 76],[13, 77],[14, 79],[15, 80],[16, 75],[17, 74],[18, 83],[19, 82],[20, 83],[21, 82],[22, 82],[23, 77],[24, 79],[25, 77],[26, 77],[27, 77]]) as Theme

export const light_purple_alt1_Button = n279 as Theme
export const light_purple_alt1_Switch = n279 as Theme
export const light_purple_alt1_TooltipContent = n279 as Theme
export const light_purple_alt1_SliderTrack = n279 as Theme
const n280 = t([[12, 74],[13, 75],[14, 76],[15, 77],[16, 73],[17, 72],[18, 83],[19, 82],[20, 83],[21, 82],[22, 11],[23, 79],[24, 80],[25, 79],[26, 79],[27, 80]]) as Theme

export const light_purple_alt1_Checkbox = n280 as Theme
export const light_purple_alt1_RadioGroupItem = n280 as Theme
export const light_purple_alt1_Input = n280 as Theme
export const light_purple_alt1_TextArea = n280 as Theme
const n281 = t([[12, 11],[13, 83],[14, 82],[15, 81],[16, 11],[17, 11],[18, 73],[19, 74],[20, 73],[21, 74],[22, 72],[23, 82],[24, 81],[25, 82],[26, 82],[27, 74]]) as Theme

export const light_purple_alt1_SwitchThumb = n281 as Theme
const n282 = t([[12, 80],[13, 79],[14, 77],[15, 76],[16, 81],[17, 82],[18, 73],[19, 74],[20, 73],[21, 74],[22, 74],[23, 77],[24, 76],[25, 77],[26, 77],[27, 79]]) as Theme

export const light_purple_alt1_SliderTrackActive = n282 as Theme
const n283 = t([[12, 82],[13, 81],[14, 80],[15, 79],[16, 83],[17, 11],[18, 73],[19, 74],[20, 73],[21, 74],[22, 72],[23, 80],[24, 79],[25, 80],[26, 80],[27, 76]]) as Theme

export const light_purple_alt1_SliderThumb = n283 as Theme
export const light_purple_alt1_Tooltip = n283 as Theme
export const light_purple_alt1_ProgressIndicator = n283 as Theme
const n284 = t([[12, 74],[13, 75],[14, 76],[15, 77],[16, 73],[17, 72],[18, 82],[19, 81],[20, 82],[21, 81],[22, 11],[23, 75],[24, 76],[25, 75],[26, 75],[27, 80]]) as Theme

export const light_purple_alt2_ListItem = n284 as Theme
const n285 = t([[12, 76],[13, 77],[14, 79],[15, 80],[16, 75],[17, 74],[18, 82],[19, 81],[20, 82],[21, 81],[22, 82],[23, 77],[24, 79],[25, 77],[26, 77],[27, 77]]) as Theme

export const light_purple_alt2_Card = n285 as Theme
export const light_purple_alt2_DrawerFrame = n285 as Theme
export const light_purple_alt2_Progress = n285 as Theme
export const light_purple_alt2_TooltipArrow = n285 as Theme
const n286 = t([[12, 77],[13, 79],[14, 80],[15, 81],[16, 76],[17, 75],[18, 82],[19, 81],[20, 82],[21, 81],[22, 81],[23, 77],[24, 79],[25, 77],[26, 77],[27, 76]]) as Theme

export const light_purple_alt2_Button = n286 as Theme
export const light_purple_alt2_Switch = n286 as Theme
export const light_purple_alt2_TooltipContent = n286 as Theme
export const light_purple_alt2_SliderTrack = n286 as Theme
const n287 = t([[12, 75],[13, 76],[14, 77],[15, 79],[16, 74],[17, 73],[18, 82],[19, 81],[20, 82],[21, 81],[22, 83],[23, 79],[24, 80],[25, 79],[26, 79],[27, 79]]) as Theme

export const light_purple_alt2_Checkbox = n287 as Theme
export const light_purple_alt2_RadioGroupItem = n287 as Theme
export const light_purple_alt2_Input = n287 as Theme
export const light_purple_alt2_TextArea = n287 as Theme
const n288 = t([[12, 83],[13, 82],[14, 81],[15, 80],[16, 11],[17, 11],[18, 74],[19, 75],[20, 74],[21, 75],[22, 72],[23, 82],[24, 81],[25, 82],[26, 82],[27, 75]]) as Theme

export const light_purple_alt2_SwitchThumb = n288 as Theme
const n289 = t([[12, 79],[13, 77],[14, 76],[15, 75],[16, 80],[17, 81],[18, 74],[19, 75],[20, 74],[21, 75],[22, 75],[23, 77],[24, 76],[25, 77],[26, 77],[27, 80]]) as Theme

export const light_purple_alt2_SliderTrackActive = n289 as Theme
const n290 = t([[12, 81],[13, 80],[14, 79],[15, 77],[16, 82],[17, 83],[18, 74],[19, 75],[20, 74],[21, 75],[22, 73],[23, 80],[24, 79],[25, 80],[26, 80],[27, 77]]) as Theme

export const light_purple_alt2_SliderThumb = n290 as Theme
export const light_purple_alt2_Tooltip = n290 as Theme
export const light_purple_alt2_ProgressIndicator = n290 as Theme
const n291 = t([[12, 75],[13, 76],[14, 77],[15, 79],[16, 74],[17, 73],[19, 80],[20, 81],[21, 80],[22, 83],[23, 76],[24, 77],[25, 76],[26, 76],[27, 79]]) as Theme

export const light_purple_active_ListItem = n291 as Theme
const n292 = t([[12, 79],[13, 80],[14, 81],[15, 82],[16, 77],[17, 76],[19, 80],[20, 81],[21, 80],[22, 80],[23, 79],[24, 80],[25, 79],[26, 79],[27, 75]]) as Theme

export const light_purple_active_Button = n292 as Theme
export const light_purple_active_Switch = n292 as Theme
const n293 = t([[12, 76],[13, 77],[14, 79],[15, 80],[16, 75],[17, 74],[19, 80],[20, 81],[21, 80],[22, 82],[23, 80],[24, 81],[25, 80],[26, 80],[27, 77]]) as Theme

export const light_purple_active_Checkbox = n293 as Theme
export const light_purple_active_Input = n293 as Theme
export const light_purple_active_TextArea = n293 as Theme
const n294 = t([[12, 77],[13, 76],[14, 75],[15, 74],[16, 79],[17, 80],[19, 76],[20, 75],[21, 76],[22, 76],[23, 76],[24, 75],[25, 76],[26, 76],[27, 81]]) as Theme

export const light_purple_active_SliderTrackActive = n294 as Theme
const n295 = t([[12, 61],[13, 62],[14, 63],[15, 64],[16, 60],[17, 60],[18, 71],[19, 70],[20, 71],[21, 70],[22, 11],[23, 63],[24, 64],[25, 63],[26, 63],[27, 69]]) as Theme

export const light_pink_alt1_ListItem = n295 as Theme
const n296 = t([[12, 63],[13, 64],[14, 65],[15, 67],[16, 62],[17, 61],[18, 71],[19, 70],[20, 71],[21, 70],[22, 71],[23, 65],[24, 67],[25, 65],[26, 65],[27, 67]]) as Theme

export const light_pink_alt1_Card = n296 as Theme
export const light_pink_alt1_DrawerFrame = n296 as Theme
export const light_pink_alt1_Progress = n296 as Theme
export const light_pink_alt1_TooltipArrow = n296 as Theme
const n297 = t([[12, 64],[13, 65],[14, 67],[15, 68],[16, 63],[17, 62],[18, 71],[19, 70],[20, 71],[21, 70],[22, 70],[23, 65],[24, 67],[25, 65],[26, 65],[27, 65]]) as Theme

export const light_pink_alt1_Button = n297 as Theme
export const light_pink_alt1_Switch = n297 as Theme
export const light_pink_alt1_TooltipContent = n297 as Theme
export const light_pink_alt1_SliderTrack = n297 as Theme
const n298 = t([[12, 62],[13, 63],[14, 64],[15, 65],[16, 61],[17, 60],[18, 71],[19, 70],[20, 71],[21, 70],[22, 11],[23, 67],[24, 68],[25, 67],[26, 67],[27, 68]]) as Theme

export const light_pink_alt1_Checkbox = n298 as Theme
export const light_pink_alt1_RadioGroupItem = n298 as Theme
export const light_pink_alt1_Input = n298 as Theme
export const light_pink_alt1_TextArea = n298 as Theme
const n299 = t([[12, 11],[13, 71],[14, 70],[15, 69],[16, 11],[17, 11],[18, 61],[19, 62],[20, 61],[21, 62],[22, 60],[23, 70],[24, 69],[25, 70],[26, 70],[27, 62]]) as Theme

export const light_pink_alt1_SwitchThumb = n299 as Theme
const n300 = t([[12, 68],[13, 67],[14, 65],[15, 64],[16, 69],[17, 70],[18, 61],[19, 62],[20, 61],[21, 62],[22, 62],[23, 65],[24, 64],[25, 65],[26, 65],[27, 67]]) as Theme

export const light_pink_alt1_SliderTrackActive = n300 as Theme
const n301 = t([[12, 70],[13, 69],[14, 68],[15, 67],[16, 71],[17, 11],[18, 61],[19, 62],[20, 61],[21, 62],[22, 60],[23, 68],[24, 67],[25, 68],[26, 68],[27, 64]]) as Theme

export const light_pink_alt1_SliderThumb = n301 as Theme
export const light_pink_alt1_Tooltip = n301 as Theme
export const light_pink_alt1_ProgressIndicator = n301 as Theme
const n302 = t([[12, 62],[13, 63],[14, 64],[15, 65],[16, 61],[17, 60],[18, 70],[19, 69],[20, 70],[21, 69],[22, 11],[23, 63],[24, 64],[25, 63],[26, 63],[27, 68]]) as Theme

export const light_pink_alt2_ListItem = n302 as Theme
const n303 = t([[12, 64],[13, 65],[14, 67],[15, 68],[16, 63],[17, 62],[18, 70],[19, 69],[20, 70],[21, 69],[22, 70],[23, 65],[24, 67],[25, 65],[26, 65],[27, 65]]) as Theme

export const light_pink_alt2_Card = n303 as Theme
export const light_pink_alt2_DrawerFrame = n303 as Theme
export const light_pink_alt2_Progress = n303 as Theme
export const light_pink_alt2_TooltipArrow = n303 as Theme
const n304 = t([[12, 65],[13, 67],[14, 68],[15, 69],[16, 64],[17, 63],[18, 70],[19, 69],[20, 70],[21, 69],[22, 69],[23, 65],[24, 67],[25, 65],[26, 65],[27, 64]]) as Theme

export const light_pink_alt2_Button = n304 as Theme
export const light_pink_alt2_Switch = n304 as Theme
export const light_pink_alt2_TooltipContent = n304 as Theme
export const light_pink_alt2_SliderTrack = n304 as Theme
const n305 = t([[12, 63],[13, 64],[14, 65],[15, 67],[16, 62],[17, 61],[18, 70],[19, 69],[20, 70],[21, 69],[22, 71],[23, 67],[24, 68],[25, 67],[26, 67],[27, 67]]) as Theme

export const light_pink_alt2_Checkbox = n305 as Theme
export const light_pink_alt2_RadioGroupItem = n305 as Theme
export const light_pink_alt2_Input = n305 as Theme
export const light_pink_alt2_TextArea = n305 as Theme
const n306 = t([[12, 71],[13, 70],[14, 69],[15, 68],[16, 11],[17, 11],[18, 62],[19, 63],[20, 62],[21, 63],[22, 60],[23, 70],[24, 69],[25, 70],[26, 70],[27, 63]]) as Theme

export const light_pink_alt2_SwitchThumb = n306 as Theme
const n307 = t([[12, 67],[13, 65],[14, 64],[15, 63],[16, 68],[17, 69],[18, 62],[19, 63],[20, 62],[21, 63],[22, 63],[23, 65],[24, 64],[25, 65],[26, 65],[27, 68]]) as Theme

export const light_pink_alt2_SliderTrackActive = n307 as Theme
const n308 = t([[12, 69],[13, 68],[14, 67],[15, 65],[16, 70],[17, 71],[18, 62],[19, 63],[20, 62],[21, 63],[22, 61],[23, 68],[24, 67],[25, 68],[26, 68],[27, 65]]) as Theme

export const light_pink_alt2_SliderThumb = n308 as Theme
export const light_pink_alt2_Tooltip = n308 as Theme
export const light_pink_alt2_ProgressIndicator = n308 as Theme
const n309 = t([[12, 63],[13, 64],[14, 65],[15, 67],[16, 62],[17, 61],[19, 68],[20, 69],[21, 68],[22, 71],[23, 64],[24, 65],[25, 64],[26, 64],[27, 67]]) as Theme

export const light_pink_active_ListItem = n309 as Theme
const n310 = t([[12, 67],[13, 68],[14, 69],[15, 70],[16, 65],[17, 64],[19, 68],[20, 69],[21, 68],[22, 68],[23, 67],[24, 68],[25, 67],[26, 67],[27, 63]]) as Theme

export const light_pink_active_Button = n310 as Theme
export const light_pink_active_Switch = n310 as Theme
const n311 = t([[12, 64],[13, 65],[14, 67],[15, 68],[16, 63],[17, 62],[19, 68],[20, 69],[21, 68],[22, 70],[23, 68],[24, 69],[25, 68],[26, 68],[27, 65]]) as Theme

export const light_pink_active_Checkbox = n311 as Theme
export const light_pink_active_Input = n311 as Theme
export const light_pink_active_TextArea = n311 as Theme
const n312 = t([[12, 65],[13, 64],[14, 63],[15, 62],[16, 67],[17, 68],[19, 64],[20, 63],[21, 64],[22, 64],[23, 64],[24, 63],[25, 64],[26, 64],[27, 69]]) as Theme

export const light_pink_active_SliderTrackActive = n312 as Theme
const n313 = t([[12, 85],[13, 86],[14, 87],[15, 88],[16, 84],[17, 84],[18, 95],[19, 94],[20, 95],[21, 94],[22, 11],[23, 87],[24, 88],[25, 87],[26, 87],[27, 93]]) as Theme

export const light_red_alt1_ListItem = n313 as Theme
const n314 = t([[12, 87],[13, 88],[14, 89],[15, 91],[16, 86],[17, 85],[18, 95],[19, 94],[20, 95],[21, 94],[22, 95],[23, 89],[24, 91],[25, 89],[26, 89],[27, 91]]) as Theme

export const light_red_alt1_Card = n314 as Theme
export const light_red_alt1_DrawerFrame = n314 as Theme
export const light_red_alt1_Progress = n314 as Theme
export const light_red_alt1_TooltipArrow = n314 as Theme
const n315 = t([[12, 88],[13, 89],[14, 91],[15, 92],[16, 87],[17, 86],[18, 95],[19, 94],[20, 95],[21, 94],[22, 94],[23, 89],[24, 91],[25, 89],[26, 89],[27, 89]]) as Theme

export const light_red_alt1_Button = n315 as Theme
export const light_red_alt1_Switch = n315 as Theme
export const light_red_alt1_TooltipContent = n315 as Theme
export const light_red_alt1_SliderTrack = n315 as Theme
const n316 = t([[12, 86],[13, 87],[14, 88],[15, 89],[16, 85],[17, 84],[18, 95],[19, 94],[20, 95],[21, 94],[22, 11],[23, 91],[24, 92],[25, 91],[26, 91],[27, 92]]) as Theme

export const light_red_alt1_Checkbox = n316 as Theme
export const light_red_alt1_RadioGroupItem = n316 as Theme
export const light_red_alt1_Input = n316 as Theme
export const light_red_alt1_TextArea = n316 as Theme
const n317 = t([[12, 11],[13, 95],[14, 94],[15, 93],[16, 11],[17, 11],[18, 85],[19, 86],[20, 85],[21, 86],[22, 84],[23, 94],[24, 93],[25, 94],[26, 94],[27, 86]]) as Theme

export const light_red_alt1_SwitchThumb = n317 as Theme
const n318 = t([[12, 92],[13, 91],[14, 89],[15, 88],[16, 93],[17, 94],[18, 85],[19, 86],[20, 85],[21, 86],[22, 86],[23, 89],[24, 88],[25, 89],[26, 89],[27, 91]]) as Theme

export const light_red_alt1_SliderTrackActive = n318 as Theme
const n319 = t([[12, 94],[13, 93],[14, 92],[15, 91],[16, 95],[17, 11],[18, 85],[19, 86],[20, 85],[21, 86],[22, 84],[23, 92],[24, 91],[25, 92],[26, 92],[27, 88]]) as Theme

export const light_red_alt1_SliderThumb = n319 as Theme
export const light_red_alt1_Tooltip = n319 as Theme
export const light_red_alt1_ProgressIndicator = n319 as Theme
const n320 = t([[12, 86],[13, 87],[14, 88],[15, 89],[16, 85],[17, 84],[18, 94],[19, 93],[20, 94],[21, 93],[22, 11],[23, 87],[24, 88],[25, 87],[26, 87],[27, 92]]) as Theme

export const light_red_alt2_ListItem = n320 as Theme
const n321 = t([[12, 88],[13, 89],[14, 91],[15, 92],[16, 87],[17, 86],[18, 94],[19, 93],[20, 94],[21, 93],[22, 94],[23, 89],[24, 91],[25, 89],[26, 89],[27, 89]]) as Theme

export const light_red_alt2_Card = n321 as Theme
export const light_red_alt2_DrawerFrame = n321 as Theme
export const light_red_alt2_Progress = n321 as Theme
export const light_red_alt2_TooltipArrow = n321 as Theme
const n322 = t([[12, 89],[13, 91],[14, 92],[15, 93],[16, 88],[17, 87],[18, 94],[19, 93],[20, 94],[21, 93],[22, 93],[23, 89],[24, 91],[25, 89],[26, 89],[27, 88]]) as Theme

export const light_red_alt2_Button = n322 as Theme
export const light_red_alt2_Switch = n322 as Theme
export const light_red_alt2_TooltipContent = n322 as Theme
export const light_red_alt2_SliderTrack = n322 as Theme
const n323 = t([[12, 87],[13, 88],[14, 89],[15, 91],[16, 86],[17, 85],[18, 94],[19, 93],[20, 94],[21, 93],[22, 95],[23, 91],[24, 92],[25, 91],[26, 91],[27, 91]]) as Theme

export const light_red_alt2_Checkbox = n323 as Theme
export const light_red_alt2_RadioGroupItem = n323 as Theme
export const light_red_alt2_Input = n323 as Theme
export const light_red_alt2_TextArea = n323 as Theme
const n324 = t([[12, 95],[13, 94],[14, 93],[15, 92],[16, 11],[17, 11],[18, 86],[19, 87],[20, 86],[21, 87],[22, 84],[23, 94],[24, 93],[25, 94],[26, 94],[27, 87]]) as Theme

export const light_red_alt2_SwitchThumb = n324 as Theme
const n325 = t([[12, 91],[13, 89],[14, 88],[15, 87],[16, 92],[17, 93],[18, 86],[19, 87],[20, 86],[21, 87],[22, 87],[23, 89],[24, 88],[25, 89],[26, 89],[27, 92]]) as Theme

export const light_red_alt2_SliderTrackActive = n325 as Theme
const n326 = t([[12, 93],[13, 92],[14, 91],[15, 89],[16, 94],[17, 95],[18, 86],[19, 87],[20, 86],[21, 87],[22, 85],[23, 92],[24, 91],[25, 92],[26, 92],[27, 89]]) as Theme

export const light_red_alt2_SliderThumb = n326 as Theme
export const light_red_alt2_Tooltip = n326 as Theme
export const light_red_alt2_ProgressIndicator = n326 as Theme
const n327 = t([[12, 87],[13, 88],[14, 89],[15, 91],[16, 86],[17, 85],[19, 92],[20, 93],[21, 92],[22, 95],[23, 88],[24, 89],[25, 88],[26, 88],[27, 91]]) as Theme

export const light_red_active_ListItem = n327 as Theme
const n328 = t([[12, 91],[13, 92],[14, 93],[15, 94],[16, 89],[17, 88],[19, 92],[20, 93],[21, 92],[22, 92],[23, 91],[24, 92],[25, 91],[26, 91],[27, 87]]) as Theme

export const light_red_active_Button = n328 as Theme
export const light_red_active_Switch = n328 as Theme
const n329 = t([[12, 88],[13, 89],[14, 91],[15, 92],[16, 87],[17, 86],[19, 92],[20, 93],[21, 92],[22, 94],[23, 92],[24, 93],[25, 92],[26, 92],[27, 89]]) as Theme

export const light_red_active_Checkbox = n329 as Theme
export const light_red_active_Input = n329 as Theme
export const light_red_active_TextArea = n329 as Theme
const n330 = t([[12, 89],[13, 88],[14, 87],[15, 86],[16, 91],[17, 92],[19, 88],[20, 87],[21, 88],[22, 88],[23, 88],[24, 87],[25, 88],[26, 88],[27, 93]]) as Theme

export const light_red_active_SliderTrackActive = n330 as Theme
const n331 = t([[12, 157],[13, 158],[14, 159],[15, 161],[16, 156],[17, 155],[18, 164],[19, 163],[20, 164],[21, 163],[22, 164],[23, 161],[24, 56],[25, 159],[26, 161],[27, 161]]) as Theme

export const dark_orange_alt1_Card = n331 as Theme
export const dark_orange_alt1_DrawerFrame = n331 as Theme
export const dark_orange_alt1_Progress = n331 as Theme
export const dark_orange_alt1_TooltipArrow = n331 as Theme
const n332 = t([[12, 158],[13, 159],[14, 161],[15, 56],[16, 157],[17, 156],[18, 164],[19, 163],[20, 164],[21, 163],[22, 163],[23, 161],[24, 56],[25, 159],[26, 161],[27, 159]]) as Theme

export const dark_orange_alt1_Button = n332 as Theme
export const dark_orange_alt1_Switch = n332 as Theme
export const dark_orange_alt1_TooltipContent = n332 as Theme
export const dark_orange_alt1_SliderTrack = n332 as Theme
const n333 = t([[12, 156],[13, 157],[14, 158],[15, 159],[16, 155],[17, 154],[18, 164],[19, 163],[20, 164],[21, 163],[22, 0],[23, 56],[24, 162],[25, 161],[26, 56],[27, 56]]) as Theme

export const dark_orange_alt1_Checkbox = n333 as Theme
export const dark_orange_alt1_RadioGroupItem = n333 as Theme
export const dark_orange_alt1_Input = n333 as Theme
export const dark_orange_alt1_TextArea = n333 as Theme
const n334 = t([[12, 0],[13, 164],[14, 163],[15, 162],[16, 0],[17, 0],[18, 155],[19, 156],[20, 155],[21, 156],[22, 154],[23, 162],[24, 56],[25, 163],[26, 162],[27, 156]]) as Theme

export const dark_orange_alt1_SwitchThumb = n334 as Theme
const n335 = t([[12, 56],[13, 161],[14, 159],[15, 158],[16, 162],[17, 163],[18, 155],[19, 156],[20, 155],[21, 156],[22, 156],[23, 158],[24, 157],[25, 159],[26, 158],[27, 161]]) as Theme

export const dark_orange_alt1_SliderTrackActive = n335 as Theme
const n336 = t([[12, 163],[13, 162],[14, 56],[15, 161],[16, 164],[17, 0],[18, 155],[19, 156],[20, 155],[21, 156],[22, 154],[23, 161],[24, 159],[25, 56],[26, 161],[27, 158]]) as Theme

export const dark_orange_alt1_SliderThumb = n336 as Theme
export const dark_orange_alt1_Tooltip = n336 as Theme
export const dark_orange_alt1_ProgressIndicator = n336 as Theme
const n337 = t([[12, 158],[13, 159],[14, 161],[15, 56],[16, 157],[17, 156],[18, 163],[19, 162],[20, 163],[21, 162],[22, 163],[23, 161],[24, 56],[25, 159],[26, 161],[27, 159]]) as Theme

export const dark_orange_alt2_Card = n337 as Theme
export const dark_orange_alt2_DrawerFrame = n337 as Theme
export const dark_orange_alt2_Progress = n337 as Theme
export const dark_orange_alt2_TooltipArrow = n337 as Theme
const n338 = t([[12, 159],[13, 161],[14, 56],[15, 162],[16, 158],[17, 157],[18, 163],[19, 162],[20, 163],[21, 162],[22, 162],[23, 161],[24, 56],[25, 159],[26, 161],[27, 158]]) as Theme

export const dark_orange_alt2_Button = n338 as Theme
export const dark_orange_alt2_Switch = n338 as Theme
export const dark_orange_alt2_TooltipContent = n338 as Theme
export const dark_orange_alt2_SliderTrack = n338 as Theme
const n339 = t([[12, 157],[13, 158],[14, 159],[15, 161],[16, 156],[17, 155],[18, 163],[19, 162],[20, 163],[21, 162],[22, 164],[23, 56],[24, 162],[25, 161],[26, 56],[27, 161]]) as Theme

export const dark_orange_alt2_Checkbox = n339 as Theme
export const dark_orange_alt2_RadioGroupItem = n339 as Theme
export const dark_orange_alt2_Input = n339 as Theme
export const dark_orange_alt2_TextArea = n339 as Theme
const n340 = t([[12, 164],[13, 163],[14, 162],[15, 56],[16, 0],[17, 0],[18, 156],[19, 157],[20, 156],[21, 157],[22, 154],[23, 162],[24, 56],[25, 163],[26, 162],[27, 157]]) as Theme

export const dark_orange_alt2_SwitchThumb = n340 as Theme
const n341 = t([[12, 161],[13, 159],[14, 158],[15, 157],[16, 56],[17, 162],[18, 156],[19, 157],[20, 156],[21, 157],[22, 157],[23, 158],[24, 157],[25, 159],[26, 158],[27, 56]]) as Theme

export const dark_orange_alt2_SliderTrackActive = n341 as Theme
const n342 = t([[12, 162],[13, 56],[14, 161],[15, 159],[16, 163],[17, 164],[18, 156],[19, 157],[20, 156],[21, 157],[22, 155],[23, 161],[24, 159],[25, 56],[26, 161],[27, 159]]) as Theme

export const dark_orange_alt2_SliderThumb = n342 as Theme
export const dark_orange_alt2_Tooltip = n342 as Theme
export const dark_orange_alt2_ProgressIndicator = n342 as Theme
const n343 = t([[12, 161],[13, 56],[14, 162],[15, 163],[16, 159],[17, 158],[19, 56],[20, 162],[21, 56],[22, 56],[23, 56],[24, 162],[25, 161],[26, 56],[27, 157]]) as Theme

export const dark_orange_active_Button = n343 as Theme
export const dark_orange_active_Switch = n343 as Theme
const n344 = t([[12, 158],[13, 159],[14, 161],[15, 56],[16, 157],[17, 156],[19, 56],[20, 162],[21, 56],[22, 163],[23, 162],[24, 163],[25, 56],[26, 162],[27, 159]]) as Theme

export const dark_orange_active_Checkbox = n344 as Theme
export const dark_orange_active_Input = n344 as Theme
export const dark_orange_active_TextArea = n344 as Theme
const n345 = t([[12, 159],[13, 158],[14, 157],[15, 156],[16, 161],[17, 56],[19, 158],[20, 157],[21, 158],[22, 158],[23, 157],[24, 156],[25, 158],[26, 157],[27, 162]]) as Theme

export const dark_orange_active_SliderTrackActive = n345 as Theme
const n346 = t([[12, 201],[13, 202],[14, 203],[15, 205],[16, 200],[17, 199],[18, 208],[19, 207],[20, 208],[21, 207],[22, 208],[23, 205],[24, 104],[25, 203],[26, 205],[27, 205]]) as Theme

export const dark_yellow_alt1_Card = n346 as Theme
export const dark_yellow_alt1_DrawerFrame = n346 as Theme
export const dark_yellow_alt1_Progress = n346 as Theme
export const dark_yellow_alt1_TooltipArrow = n346 as Theme
const n347 = t([[12, 202],[13, 203],[14, 205],[15, 104],[16, 201],[17, 200],[18, 208],[19, 207],[20, 208],[21, 207],[22, 207],[23, 205],[24, 104],[25, 203],[26, 205],[27, 203]]) as Theme

export const dark_yellow_alt1_Button = n347 as Theme
export const dark_yellow_alt1_Switch = n347 as Theme
export const dark_yellow_alt1_TooltipContent = n347 as Theme
export const dark_yellow_alt1_SliderTrack = n347 as Theme
const n348 = t([[12, 200],[13, 201],[14, 202],[15, 203],[16, 199],[17, 198],[18, 208],[19, 207],[20, 208],[21, 207],[22, 0],[23, 104],[24, 206],[25, 205],[26, 104],[27, 104]]) as Theme

export const dark_yellow_alt1_Checkbox = n348 as Theme
export const dark_yellow_alt1_RadioGroupItem = n348 as Theme
export const dark_yellow_alt1_Input = n348 as Theme
export const dark_yellow_alt1_TextArea = n348 as Theme
const n349 = t([[12, 0],[13, 208],[14, 207],[15, 206],[16, 0],[17, 0],[18, 199],[19, 200],[20, 199],[21, 200],[22, 198],[23, 206],[24, 104],[25, 207],[26, 206],[27, 200]]) as Theme

export const dark_yellow_alt1_SwitchThumb = n349 as Theme
const n350 = t([[12, 104],[13, 205],[14, 203],[15, 202],[16, 206],[17, 207],[18, 199],[19, 200],[20, 199],[21, 200],[22, 200],[23, 202],[24, 201],[25, 203],[26, 202],[27, 205]]) as Theme

export const dark_yellow_alt1_SliderTrackActive = n350 as Theme
const n351 = t([[12, 207],[13, 206],[14, 104],[15, 205],[16, 208],[17, 0],[18, 199],[19, 200],[20, 199],[21, 200],[22, 198],[23, 205],[24, 203],[25, 104],[26, 205],[27, 202]]) as Theme

export const dark_yellow_alt1_SliderThumb = n351 as Theme
export const dark_yellow_alt1_Tooltip = n351 as Theme
export const dark_yellow_alt1_ProgressIndicator = n351 as Theme
const n352 = t([[12, 202],[13, 203],[14, 205],[15, 104],[16, 201],[17, 200],[18, 207],[19, 206],[20, 207],[21, 206],[22, 207],[23, 205],[24, 104],[25, 203],[26, 205],[27, 203]]) as Theme

export const dark_yellow_alt2_Card = n352 as Theme
export const dark_yellow_alt2_DrawerFrame = n352 as Theme
export const dark_yellow_alt2_Progress = n352 as Theme
export const dark_yellow_alt2_TooltipArrow = n352 as Theme
const n353 = t([[12, 203],[13, 205],[14, 104],[15, 206],[16, 202],[17, 201],[18, 207],[19, 206],[20, 207],[21, 206],[22, 206],[23, 205],[24, 104],[25, 203],[26, 205],[27, 202]]) as Theme

export const dark_yellow_alt2_Button = n353 as Theme
export const dark_yellow_alt2_Switch = n353 as Theme
export const dark_yellow_alt2_TooltipContent = n353 as Theme
export const dark_yellow_alt2_SliderTrack = n353 as Theme
const n354 = t([[12, 201],[13, 202],[14, 203],[15, 205],[16, 200],[17, 199],[18, 207],[19, 206],[20, 207],[21, 206],[22, 208],[23, 104],[24, 206],[25, 205],[26, 104],[27, 205]]) as Theme

export const dark_yellow_alt2_Checkbox = n354 as Theme
export const dark_yellow_alt2_RadioGroupItem = n354 as Theme
export const dark_yellow_alt2_Input = n354 as Theme
export const dark_yellow_alt2_TextArea = n354 as Theme
const n355 = t([[12, 208],[13, 207],[14, 206],[15, 104],[16, 0],[17, 0],[18, 200],[19, 201],[20, 200],[21, 201],[22, 198],[23, 206],[24, 104],[25, 207],[26, 206],[27, 201]]) as Theme

export const dark_yellow_alt2_SwitchThumb = n355 as Theme
const n356 = t([[12, 205],[13, 203],[14, 202],[15, 201],[16, 104],[17, 206],[18, 200],[19, 201],[20, 200],[21, 201],[22, 201],[23, 202],[24, 201],[25, 203],[26, 202],[27, 104]]) as Theme

export const dark_yellow_alt2_SliderTrackActive = n356 as Theme
const n357 = t([[12, 206],[13, 104],[14, 205],[15, 203],[16, 207],[17, 208],[18, 200],[19, 201],[20, 200],[21, 201],[22, 199],[23, 205],[24, 203],[25, 104],[26, 205],[27, 203]]) as Theme

export const dark_yellow_alt2_SliderThumb = n357 as Theme
export const dark_yellow_alt2_Tooltip = n357 as Theme
export const dark_yellow_alt2_ProgressIndicator = n357 as Theme
const n358 = t([[12, 205],[13, 104],[14, 206],[15, 207],[16, 203],[17, 202],[19, 104],[20, 206],[21, 104],[22, 104],[23, 104],[24, 206],[25, 205],[26, 104],[27, 201]]) as Theme

export const dark_yellow_active_Button = n358 as Theme
export const dark_yellow_active_Switch = n358 as Theme
const n359 = t([[12, 202],[13, 203],[14, 205],[15, 104],[16, 201],[17, 200],[19, 104],[20, 206],[21, 104],[22, 207],[23, 206],[24, 207],[25, 104],[26, 206],[27, 203]]) as Theme

export const dark_yellow_active_Checkbox = n359 as Theme
export const dark_yellow_active_Input = n359 as Theme
export const dark_yellow_active_TextArea = n359 as Theme
const n360 = t([[12, 203],[13, 202],[14, 201],[15, 200],[16, 205],[17, 104],[19, 202],[20, 201],[21, 202],[22, 202],[23, 201],[24, 200],[25, 202],[26, 201],[27, 206]]) as Theme

export const dark_yellow_active_SliderTrackActive = n360 as Theme
const n361 = t([[12, 146],[13, 147],[14, 148],[15, 150],[16, 145],[17, 144],[18, 153],[19, 152],[20, 153],[21, 152],[22, 153],[23, 150],[24, 44],[25, 148],[26, 150],[27, 150]]) as Theme

export const dark_green_alt1_Card = n361 as Theme
export const dark_green_alt1_DrawerFrame = n361 as Theme
export const dark_green_alt1_Progress = n361 as Theme
export const dark_green_alt1_TooltipArrow = n361 as Theme
const n362 = t([[12, 147],[13, 148],[14, 150],[15, 44],[16, 146],[17, 145],[18, 153],[19, 152],[20, 153],[21, 152],[22, 152],[23, 150],[24, 44],[25, 148],[26, 150],[27, 148]]) as Theme

export const dark_green_alt1_Button = n362 as Theme
export const dark_green_alt1_Switch = n362 as Theme
export const dark_green_alt1_TooltipContent = n362 as Theme
export const dark_green_alt1_SliderTrack = n362 as Theme
const n363 = t([[12, 145],[13, 146],[14, 147],[15, 148],[16, 144],[17, 143],[18, 153],[19, 152],[20, 153],[21, 152],[22, 0],[23, 44],[24, 151],[25, 150],[26, 44],[27, 44]]) as Theme

export const dark_green_alt1_Checkbox = n363 as Theme
export const dark_green_alt1_RadioGroupItem = n363 as Theme
export const dark_green_alt1_Input = n363 as Theme
export const dark_green_alt1_TextArea = n363 as Theme
const n364 = t([[12, 0],[13, 153],[14, 152],[15, 151],[16, 0],[17, 0],[18, 144],[19, 145],[20, 144],[21, 145],[22, 143],[23, 151],[24, 44],[25, 152],[26, 151],[27, 145]]) as Theme

export const dark_green_alt1_SwitchThumb = n364 as Theme
const n365 = t([[12, 44],[13, 150],[14, 148],[15, 147],[16, 151],[17, 152],[18, 144],[19, 145],[20, 144],[21, 145],[22, 145],[23, 147],[24, 146],[25, 148],[26, 147],[27, 150]]) as Theme

export const dark_green_alt1_SliderTrackActive = n365 as Theme
const n366 = t([[12, 152],[13, 151],[14, 44],[15, 150],[16, 153],[17, 0],[18, 144],[19, 145],[20, 144],[21, 145],[22, 143],[23, 150],[24, 148],[25, 44],[26, 150],[27, 147]]) as Theme

export const dark_green_alt1_SliderThumb = n366 as Theme
export const dark_green_alt1_Tooltip = n366 as Theme
export const dark_green_alt1_ProgressIndicator = n366 as Theme
const n367 = t([[12, 147],[13, 148],[14, 150],[15, 44],[16, 146],[17, 145],[18, 152],[19, 151],[20, 152],[21, 151],[22, 152],[23, 150],[24, 44],[25, 148],[26, 150],[27, 148]]) as Theme

export const dark_green_alt2_Card = n367 as Theme
export const dark_green_alt2_DrawerFrame = n367 as Theme
export const dark_green_alt2_Progress = n367 as Theme
export const dark_green_alt2_TooltipArrow = n367 as Theme
const n368 = t([[12, 148],[13, 150],[14, 44],[15, 151],[16, 147],[17, 146],[18, 152],[19, 151],[20, 152],[21, 151],[22, 151],[23, 150],[24, 44],[25, 148],[26, 150],[27, 147]]) as Theme

export const dark_green_alt2_Button = n368 as Theme
export const dark_green_alt2_Switch = n368 as Theme
export const dark_green_alt2_TooltipContent = n368 as Theme
export const dark_green_alt2_SliderTrack = n368 as Theme
const n369 = t([[12, 146],[13, 147],[14, 148],[15, 150],[16, 145],[17, 144],[18, 152],[19, 151],[20, 152],[21, 151],[22, 153],[23, 44],[24, 151],[25, 150],[26, 44],[27, 150]]) as Theme

export const dark_green_alt2_Checkbox = n369 as Theme
export const dark_green_alt2_RadioGroupItem = n369 as Theme
export const dark_green_alt2_Input = n369 as Theme
export const dark_green_alt2_TextArea = n369 as Theme
const n370 = t([[12, 153],[13, 152],[14, 151],[15, 44],[16, 0],[17, 0],[18, 145],[19, 146],[20, 145],[21, 146],[22, 143],[23, 151],[24, 44],[25, 152],[26, 151],[27, 146]]) as Theme

export const dark_green_alt2_SwitchThumb = n370 as Theme
const n371 = t([[12, 150],[13, 148],[14, 147],[15, 146],[16, 44],[17, 151],[18, 145],[19, 146],[20, 145],[21, 146],[22, 146],[23, 147],[24, 146],[25, 148],[26, 147],[27, 44]]) as Theme

export const dark_green_alt2_SliderTrackActive = n371 as Theme
const n372 = t([[12, 151],[13, 44],[14, 150],[15, 148],[16, 152],[17, 153],[18, 145],[19, 146],[20, 145],[21, 146],[22, 144],[23, 150],[24, 148],[25, 44],[26, 150],[27, 148]]) as Theme

export const dark_green_alt2_SliderThumb = n372 as Theme
export const dark_green_alt2_Tooltip = n372 as Theme
export const dark_green_alt2_ProgressIndicator = n372 as Theme
const n373 = t([[12, 150],[13, 44],[14, 151],[15, 152],[16, 148],[17, 147],[19, 44],[20, 151],[21, 44],[22, 44],[23, 44],[24, 151],[25, 150],[26, 44],[27, 146]]) as Theme

export const dark_green_active_Button = n373 as Theme
export const dark_green_active_Switch = n373 as Theme
const n374 = t([[12, 147],[13, 148],[14, 150],[15, 44],[16, 146],[17, 145],[19, 44],[20, 151],[21, 44],[22, 152],[23, 151],[24, 152],[25, 44],[26, 151],[27, 148]]) as Theme

export const dark_green_active_Checkbox = n374 as Theme
export const dark_green_active_Input = n374 as Theme
export const dark_green_active_TextArea = n374 as Theme
const n375 = t([[12, 148],[13, 147],[14, 146],[15, 145],[16, 150],[17, 44],[19, 147],[20, 146],[21, 147],[22, 147],[23, 146],[24, 145],[25, 147],[26, 146],[27, 151]]) as Theme

export const dark_green_active_SliderTrackActive = n375 as Theme
const n376 = t([[12, 124],[13, 125],[14, 126],[15, 128],[16, 123],[17, 122],[18, 131],[19, 130],[20, 131],[21, 130],[22, 131],[23, 128],[24, 22],[25, 126],[26, 128],[27, 128]]) as Theme

export const dark_blue_alt1_Card = n376 as Theme
export const dark_blue_alt1_DrawerFrame = n376 as Theme
export const dark_blue_alt1_Progress = n376 as Theme
export const dark_blue_alt1_TooltipArrow = n376 as Theme
const n377 = t([[12, 125],[13, 126],[14, 128],[15, 22],[16, 124],[17, 123],[18, 131],[19, 130],[20, 131],[21, 130],[22, 130],[23, 128],[24, 22],[25, 126],[26, 128],[27, 126]]) as Theme

export const dark_blue_alt1_Button = n377 as Theme
export const dark_blue_alt1_Switch = n377 as Theme
export const dark_blue_alt1_TooltipContent = n377 as Theme
export const dark_blue_alt1_SliderTrack = n377 as Theme
const n378 = t([[12, 123],[13, 124],[14, 125],[15, 126],[16, 122],[17, 121],[18, 131],[19, 130],[20, 131],[21, 130],[22, 0],[23, 22],[24, 129],[25, 128],[26, 22],[27, 22]]) as Theme

export const dark_blue_alt1_Checkbox = n378 as Theme
export const dark_blue_alt1_RadioGroupItem = n378 as Theme
export const dark_blue_alt1_Input = n378 as Theme
export const dark_blue_alt1_TextArea = n378 as Theme
const n379 = t([[12, 0],[13, 131],[14, 130],[15, 129],[16, 0],[17, 0],[18, 122],[19, 123],[20, 122],[21, 123],[22, 121],[23, 129],[24, 22],[25, 130],[26, 129],[27, 123]]) as Theme

export const dark_blue_alt1_SwitchThumb = n379 as Theme
const n380 = t([[12, 22],[13, 128],[14, 126],[15, 125],[16, 129],[17, 130],[18, 122],[19, 123],[20, 122],[21, 123],[22, 123],[23, 125],[24, 124],[25, 126],[26, 125],[27, 128]]) as Theme

export const dark_blue_alt1_SliderTrackActive = n380 as Theme
const n381 = t([[12, 130],[13, 129],[14, 22],[15, 128],[16, 131],[17, 0],[18, 122],[19, 123],[20, 122],[21, 123],[22, 121],[23, 128],[24, 126],[25, 22],[26, 128],[27, 125]]) as Theme

export const dark_blue_alt1_SliderThumb = n381 as Theme
export const dark_blue_alt1_Tooltip = n381 as Theme
export const dark_blue_alt1_ProgressIndicator = n381 as Theme
const n382 = t([[12, 125],[13, 126],[14, 128],[15, 22],[16, 124],[17, 123],[18, 130],[19, 129],[20, 130],[21, 129],[22, 130],[23, 128],[24, 22],[25, 126],[26, 128],[27, 126]]) as Theme

export const dark_blue_alt2_Card = n382 as Theme
export const dark_blue_alt2_DrawerFrame = n382 as Theme
export const dark_blue_alt2_Progress = n382 as Theme
export const dark_blue_alt2_TooltipArrow = n382 as Theme
const n383 = t([[12, 126],[13, 128],[14, 22],[15, 129],[16, 125],[17, 124],[18, 130],[19, 129],[20, 130],[21, 129],[22, 129],[23, 128],[24, 22],[25, 126],[26, 128],[27, 125]]) as Theme

export const dark_blue_alt2_Button = n383 as Theme
export const dark_blue_alt2_Switch = n383 as Theme
export const dark_blue_alt2_TooltipContent = n383 as Theme
export const dark_blue_alt2_SliderTrack = n383 as Theme
const n384 = t([[12, 124],[13, 125],[14, 126],[15, 128],[16, 123],[17, 122],[18, 130],[19, 129],[20, 130],[21, 129],[22, 131],[23, 22],[24, 129],[25, 128],[26, 22],[27, 128]]) as Theme

export const dark_blue_alt2_Checkbox = n384 as Theme
export const dark_blue_alt2_RadioGroupItem = n384 as Theme
export const dark_blue_alt2_Input = n384 as Theme
export const dark_blue_alt2_TextArea = n384 as Theme
const n385 = t([[12, 131],[13, 130],[14, 129],[15, 22],[16, 0],[17, 0],[18, 123],[19, 124],[20, 123],[21, 124],[22, 121],[23, 129],[24, 22],[25, 130],[26, 129],[27, 124]]) as Theme

export const dark_blue_alt2_SwitchThumb = n385 as Theme
const n386 = t([[12, 128],[13, 126],[14, 125],[15, 124],[16, 22],[17, 129],[18, 123],[19, 124],[20, 123],[21, 124],[22, 124],[23, 125],[24, 124],[25, 126],[26, 125],[27, 22]]) as Theme

export const dark_blue_alt2_SliderTrackActive = n386 as Theme
const n387 = t([[12, 129],[13, 22],[14, 128],[15, 126],[16, 130],[17, 131],[18, 123],[19, 124],[20, 123],[21, 124],[22, 122],[23, 128],[24, 126],[25, 22],[26, 128],[27, 126]]) as Theme

export const dark_blue_alt2_SliderThumb = n387 as Theme
export const dark_blue_alt2_Tooltip = n387 as Theme
export const dark_blue_alt2_ProgressIndicator = n387 as Theme
const n388 = t([[12, 128],[13, 22],[14, 129],[15, 130],[16, 126],[17, 125],[19, 22],[20, 129],[21, 22],[22, 22],[23, 22],[24, 129],[25, 128],[26, 22],[27, 124]]) as Theme

export const dark_blue_active_Button = n388 as Theme
export const dark_blue_active_Switch = n388 as Theme
const n389 = t([[12, 125],[13, 126],[14, 128],[15, 22],[16, 124],[17, 123],[19, 22],[20, 129],[21, 22],[22, 130],[23, 129],[24, 130],[25, 22],[26, 129],[27, 126]]) as Theme

export const dark_blue_active_Checkbox = n389 as Theme
export const dark_blue_active_Input = n389 as Theme
export const dark_blue_active_TextArea = n389 as Theme
const n390 = t([[12, 126],[13, 125],[14, 124],[15, 123],[16, 128],[17, 22],[19, 125],[20, 124],[21, 125],[22, 125],[23, 124],[24, 123],[25, 125],[26, 124],[27, 129]]) as Theme

export const dark_blue_active_SliderTrackActive = n390 as Theme
const n391 = t([[12, 179],[13, 180],[14, 181],[15, 183],[16, 178],[17, 177],[18, 186],[19, 185],[20, 186],[21, 185],[22, 186],[23, 183],[24, 80],[25, 181],[26, 183],[27, 183]]) as Theme

export const dark_purple_alt1_Card = n391 as Theme
export const dark_purple_alt1_DrawerFrame = n391 as Theme
export const dark_purple_alt1_Progress = n391 as Theme
export const dark_purple_alt1_TooltipArrow = n391 as Theme
const n392 = t([[12, 180],[13, 181],[14, 183],[15, 80],[16, 179],[17, 178],[18, 186],[19, 185],[20, 186],[21, 185],[22, 185],[23, 183],[24, 80],[25, 181],[26, 183],[27, 181]]) as Theme

export const dark_purple_alt1_Button = n392 as Theme
export const dark_purple_alt1_Switch = n392 as Theme
export const dark_purple_alt1_TooltipContent = n392 as Theme
export const dark_purple_alt1_SliderTrack = n392 as Theme
const n393 = t([[12, 178],[13, 179],[14, 180],[15, 181],[16, 177],[17, 176],[18, 186],[19, 185],[20, 186],[21, 185],[22, 0],[23, 80],[24, 184],[25, 183],[26, 80],[27, 80]]) as Theme

export const dark_purple_alt1_Checkbox = n393 as Theme
export const dark_purple_alt1_RadioGroupItem = n393 as Theme
export const dark_purple_alt1_Input = n393 as Theme
export const dark_purple_alt1_TextArea = n393 as Theme
const n394 = t([[12, 0],[13, 186],[14, 185],[15, 184],[16, 0],[17, 0],[18, 177],[19, 178],[20, 177],[21, 178],[22, 176],[23, 184],[24, 80],[25, 185],[26, 184],[27, 178]]) as Theme

export const dark_purple_alt1_SwitchThumb = n394 as Theme
const n395 = t([[12, 80],[13, 183],[14, 181],[15, 180],[16, 184],[17, 185],[18, 177],[19, 178],[20, 177],[21, 178],[22, 178],[23, 180],[24, 179],[25, 181],[26, 180],[27, 183]]) as Theme

export const dark_purple_alt1_SliderTrackActive = n395 as Theme
const n396 = t([[12, 185],[13, 184],[14, 80],[15, 183],[16, 186],[17, 0],[18, 177],[19, 178],[20, 177],[21, 178],[22, 176],[23, 183],[24, 181],[25, 80],[26, 183],[27, 180]]) as Theme

export const dark_purple_alt1_SliderThumb = n396 as Theme
export const dark_purple_alt1_Tooltip = n396 as Theme
export const dark_purple_alt1_ProgressIndicator = n396 as Theme
const n397 = t([[12, 180],[13, 181],[14, 183],[15, 80],[16, 179],[17, 178],[18, 185],[19, 184],[20, 185],[21, 184],[22, 185],[23, 183],[24, 80],[25, 181],[26, 183],[27, 181]]) as Theme

export const dark_purple_alt2_Card = n397 as Theme
export const dark_purple_alt2_DrawerFrame = n397 as Theme
export const dark_purple_alt2_Progress = n397 as Theme
export const dark_purple_alt2_TooltipArrow = n397 as Theme
const n398 = t([[12, 181],[13, 183],[14, 80],[15, 184],[16, 180],[17, 179],[18, 185],[19, 184],[20, 185],[21, 184],[22, 184],[23, 183],[24, 80],[25, 181],[26, 183],[27, 180]]) as Theme

export const dark_purple_alt2_Button = n398 as Theme
export const dark_purple_alt2_Switch = n398 as Theme
export const dark_purple_alt2_TooltipContent = n398 as Theme
export const dark_purple_alt2_SliderTrack = n398 as Theme
const n399 = t([[12, 179],[13, 180],[14, 181],[15, 183],[16, 178],[17, 177],[18, 185],[19, 184],[20, 185],[21, 184],[22, 186],[23, 80],[24, 184],[25, 183],[26, 80],[27, 183]]) as Theme

export const dark_purple_alt2_Checkbox = n399 as Theme
export const dark_purple_alt2_RadioGroupItem = n399 as Theme
export const dark_purple_alt2_Input = n399 as Theme
export const dark_purple_alt2_TextArea = n399 as Theme
const n400 = t([[12, 186],[13, 185],[14, 184],[15, 80],[16, 0],[17, 0],[18, 178],[19, 179],[20, 178],[21, 179],[22, 176],[23, 184],[24, 80],[25, 185],[26, 184],[27, 179]]) as Theme

export const dark_purple_alt2_SwitchThumb = n400 as Theme
const n401 = t([[12, 183],[13, 181],[14, 180],[15, 179],[16, 80],[17, 184],[18, 178],[19, 179],[20, 178],[21, 179],[22, 179],[23, 180],[24, 179],[25, 181],[26, 180],[27, 80]]) as Theme

export const dark_purple_alt2_SliderTrackActive = n401 as Theme
const n402 = t([[12, 184],[13, 80],[14, 183],[15, 181],[16, 185],[17, 186],[18, 178],[19, 179],[20, 178],[21, 179],[22, 177],[23, 183],[24, 181],[25, 80],[26, 183],[27, 181]]) as Theme

export const dark_purple_alt2_SliderThumb = n402 as Theme
export const dark_purple_alt2_Tooltip = n402 as Theme
export const dark_purple_alt2_ProgressIndicator = n402 as Theme
const n403 = t([[12, 183],[13, 80],[14, 184],[15, 185],[16, 181],[17, 180],[19, 80],[20, 184],[21, 80],[22, 80],[23, 80],[24, 184],[25, 183],[26, 80],[27, 179]]) as Theme

export const dark_purple_active_Button = n403 as Theme
export const dark_purple_active_Switch = n403 as Theme
const n404 = t([[12, 180],[13, 181],[14, 183],[15, 80],[16, 179],[17, 178],[19, 80],[20, 184],[21, 80],[22, 185],[23, 184],[24, 185],[25, 80],[26, 184],[27, 181]]) as Theme

export const dark_purple_active_Checkbox = n404 as Theme
export const dark_purple_active_Input = n404 as Theme
export const dark_purple_active_TextArea = n404 as Theme
const n405 = t([[12, 181],[13, 180],[14, 179],[15, 178],[16, 183],[17, 80],[19, 180],[20, 179],[21, 180],[22, 180],[23, 179],[24, 178],[25, 180],[26, 179],[27, 184]]) as Theme

export const dark_purple_active_SliderTrackActive = n405 as Theme
const n406 = t([[12, 168],[13, 169],[14, 170],[15, 172],[16, 167],[17, 166],[18, 175],[19, 174],[20, 175],[21, 174],[22, 175],[23, 172],[24, 68],[25, 170],[26, 172],[27, 172]]) as Theme

export const dark_pink_alt1_Card = n406 as Theme
export const dark_pink_alt1_DrawerFrame = n406 as Theme
export const dark_pink_alt1_Progress = n406 as Theme
export const dark_pink_alt1_TooltipArrow = n406 as Theme
const n407 = t([[12, 169],[13, 170],[14, 172],[15, 68],[16, 168],[17, 167],[18, 175],[19, 174],[20, 175],[21, 174],[22, 174],[23, 172],[24, 68],[25, 170],[26, 172],[27, 170]]) as Theme

export const dark_pink_alt1_Button = n407 as Theme
export const dark_pink_alt1_Switch = n407 as Theme
export const dark_pink_alt1_TooltipContent = n407 as Theme
export const dark_pink_alt1_SliderTrack = n407 as Theme
const n408 = t([[12, 167],[13, 168],[14, 169],[15, 170],[16, 166],[17, 165],[18, 175],[19, 174],[20, 175],[21, 174],[22, 0],[23, 68],[24, 173],[25, 172],[26, 68],[27, 68]]) as Theme

export const dark_pink_alt1_Checkbox = n408 as Theme
export const dark_pink_alt1_RadioGroupItem = n408 as Theme
export const dark_pink_alt1_Input = n408 as Theme
export const dark_pink_alt1_TextArea = n408 as Theme
const n409 = t([[12, 0],[13, 175],[14, 174],[15, 173],[16, 0],[17, 0],[18, 166],[19, 167],[20, 166],[21, 167],[22, 165],[23, 173],[24, 68],[25, 174],[26, 173],[27, 167]]) as Theme

export const dark_pink_alt1_SwitchThumb = n409 as Theme
const n410 = t([[12, 68],[13, 172],[14, 170],[15, 169],[16, 173],[17, 174],[18, 166],[19, 167],[20, 166],[21, 167],[22, 167],[23, 169],[24, 168],[25, 170],[26, 169],[27, 172]]) as Theme

export const dark_pink_alt1_SliderTrackActive = n410 as Theme
const n411 = t([[12, 174],[13, 173],[14, 68],[15, 172],[16, 175],[17, 0],[18, 166],[19, 167],[20, 166],[21, 167],[22, 165],[23, 172],[24, 170],[25, 68],[26, 172],[27, 169]]) as Theme

export const dark_pink_alt1_SliderThumb = n411 as Theme
export const dark_pink_alt1_Tooltip = n411 as Theme
export const dark_pink_alt1_ProgressIndicator = n411 as Theme
const n412 = t([[12, 169],[13, 170],[14, 172],[15, 68],[16, 168],[17, 167],[18, 174],[19, 173],[20, 174],[21, 173],[22, 174],[23, 172],[24, 68],[25, 170],[26, 172],[27, 170]]) as Theme

export const dark_pink_alt2_Card = n412 as Theme
export const dark_pink_alt2_DrawerFrame = n412 as Theme
export const dark_pink_alt2_Progress = n412 as Theme
export const dark_pink_alt2_TooltipArrow = n412 as Theme
const n413 = t([[12, 170],[13, 172],[14, 68],[15, 173],[16, 169],[17, 168],[18, 174],[19, 173],[20, 174],[21, 173],[22, 173],[23, 172],[24, 68],[25, 170],[26, 172],[27, 169]]) as Theme

export const dark_pink_alt2_Button = n413 as Theme
export const dark_pink_alt2_Switch = n413 as Theme
export const dark_pink_alt2_TooltipContent = n413 as Theme
export const dark_pink_alt2_SliderTrack = n413 as Theme
const n414 = t([[12, 168],[13, 169],[14, 170],[15, 172],[16, 167],[17, 166],[18, 174],[19, 173],[20, 174],[21, 173],[22, 175],[23, 68],[24, 173],[25, 172],[26, 68],[27, 172]]) as Theme

export const dark_pink_alt2_Checkbox = n414 as Theme
export const dark_pink_alt2_RadioGroupItem = n414 as Theme
export const dark_pink_alt2_Input = n414 as Theme
export const dark_pink_alt2_TextArea = n414 as Theme
const n415 = t([[12, 175],[13, 174],[14, 173],[15, 68],[16, 0],[17, 0],[18, 167],[19, 168],[20, 167],[21, 168],[22, 165],[23, 173],[24, 68],[25, 174],[26, 173],[27, 168]]) as Theme

export const dark_pink_alt2_SwitchThumb = n415 as Theme
const n416 = t([[12, 172],[13, 170],[14, 169],[15, 168],[16, 68],[17, 173],[18, 167],[19, 168],[20, 167],[21, 168],[22, 168],[23, 169],[24, 168],[25, 170],[26, 169],[27, 68]]) as Theme

export const dark_pink_alt2_SliderTrackActive = n416 as Theme
const n417 = t([[12, 173],[13, 68],[14, 172],[15, 170],[16, 174],[17, 175],[18, 167],[19, 168],[20, 167],[21, 168],[22, 166],[23, 172],[24, 170],[25, 68],[26, 172],[27, 170]]) as Theme

export const dark_pink_alt2_SliderThumb = n417 as Theme
export const dark_pink_alt2_Tooltip = n417 as Theme
export const dark_pink_alt2_ProgressIndicator = n417 as Theme
const n418 = t([[12, 172],[13, 68],[14, 173],[15, 174],[16, 170],[17, 169],[19, 68],[20, 173],[21, 68],[22, 68],[23, 68],[24, 173],[25, 172],[26, 68],[27, 168]]) as Theme

export const dark_pink_active_Button = n418 as Theme
export const dark_pink_active_Switch = n418 as Theme
const n419 = t([[12, 169],[13, 170],[14, 172],[15, 68],[16, 168],[17, 167],[19, 68],[20, 173],[21, 68],[22, 174],[23, 173],[24, 174],[25, 68],[26, 173],[27, 170]]) as Theme

export const dark_pink_active_Checkbox = n419 as Theme
export const dark_pink_active_Input = n419 as Theme
export const dark_pink_active_TextArea = n419 as Theme
const n420 = t([[12, 170],[13, 169],[14, 168],[15, 167],[16, 172],[17, 68],[19, 169],[20, 168],[21, 169],[22, 169],[23, 168],[24, 167],[25, 169],[26, 168],[27, 173]]) as Theme

export const dark_pink_active_SliderTrackActive = n420 as Theme
const n421 = t([[12, 190],[13, 191],[14, 192],[15, 194],[16, 189],[17, 188],[18, 197],[19, 196],[20, 197],[21, 196],[22, 197],[23, 194],[24, 92],[25, 192],[26, 194],[27, 194]]) as Theme

export const dark_red_alt1_Card = n421 as Theme
export const dark_red_alt1_DrawerFrame = n421 as Theme
export const dark_red_alt1_Progress = n421 as Theme
export const dark_red_alt1_TooltipArrow = n421 as Theme
const n422 = t([[12, 191],[13, 192],[14, 194],[15, 92],[16, 190],[17, 189],[18, 197],[19, 196],[20, 197],[21, 196],[22, 196],[23, 194],[24, 92],[25, 192],[26, 194],[27, 192]]) as Theme

export const dark_red_alt1_Button = n422 as Theme
export const dark_red_alt1_Switch = n422 as Theme
export const dark_red_alt1_TooltipContent = n422 as Theme
export const dark_red_alt1_SliderTrack = n422 as Theme
const n423 = t([[12, 189],[13, 190],[14, 191],[15, 192],[16, 188],[17, 187],[18, 197],[19, 196],[20, 197],[21, 196],[22, 0],[23, 92],[24, 195],[25, 194],[26, 92],[27, 92]]) as Theme

export const dark_red_alt1_Checkbox = n423 as Theme
export const dark_red_alt1_RadioGroupItem = n423 as Theme
export const dark_red_alt1_Input = n423 as Theme
export const dark_red_alt1_TextArea = n423 as Theme
const n424 = t([[12, 0],[13, 197],[14, 196],[15, 195],[16, 0],[17, 0],[18, 188],[19, 189],[20, 188],[21, 189],[22, 187],[23, 195],[24, 92],[25, 196],[26, 195],[27, 189]]) as Theme

export const dark_red_alt1_SwitchThumb = n424 as Theme
const n425 = t([[12, 92],[13, 194],[14, 192],[15, 191],[16, 195],[17, 196],[18, 188],[19, 189],[20, 188],[21, 189],[22, 189],[23, 191],[24, 190],[25, 192],[26, 191],[27, 194]]) as Theme

export const dark_red_alt1_SliderTrackActive = n425 as Theme
const n426 = t([[12, 196],[13, 195],[14, 92],[15, 194],[16, 197],[17, 0],[18, 188],[19, 189],[20, 188],[21, 189],[22, 187],[23, 194],[24, 192],[25, 92],[26, 194],[27, 191]]) as Theme

export const dark_red_alt1_SliderThumb = n426 as Theme
export const dark_red_alt1_Tooltip = n426 as Theme
export const dark_red_alt1_ProgressIndicator = n426 as Theme
const n427 = t([[12, 191],[13, 192],[14, 194],[15, 92],[16, 190],[17, 189],[18, 196],[19, 195],[20, 196],[21, 195],[22, 196],[23, 194],[24, 92],[25, 192],[26, 194],[27, 192]]) as Theme

export const dark_red_alt2_Card = n427 as Theme
export const dark_red_alt2_DrawerFrame = n427 as Theme
export const dark_red_alt2_Progress = n427 as Theme
export const dark_red_alt2_TooltipArrow = n427 as Theme
const n428 = t([[12, 192],[13, 194],[14, 92],[15, 195],[16, 191],[17, 190],[18, 196],[19, 195],[20, 196],[21, 195],[22, 195],[23, 194],[24, 92],[25, 192],[26, 194],[27, 191]]) as Theme

export const dark_red_alt2_Button = n428 as Theme
export const dark_red_alt2_Switch = n428 as Theme
export const dark_red_alt2_TooltipContent = n428 as Theme
export const dark_red_alt2_SliderTrack = n428 as Theme
const n429 = t([[12, 190],[13, 191],[14, 192],[15, 194],[16, 189],[17, 188],[18, 196],[19, 195],[20, 196],[21, 195],[22, 197],[23, 92],[24, 195],[25, 194],[26, 92],[27, 194]]) as Theme

export const dark_red_alt2_Checkbox = n429 as Theme
export const dark_red_alt2_RadioGroupItem = n429 as Theme
export const dark_red_alt2_Input = n429 as Theme
export const dark_red_alt2_TextArea = n429 as Theme
const n430 = t([[12, 197],[13, 196],[14, 195],[15, 92],[16, 0],[17, 0],[18, 189],[19, 190],[20, 189],[21, 190],[22, 187],[23, 195],[24, 92],[25, 196],[26, 195],[27, 190]]) as Theme

export const dark_red_alt2_SwitchThumb = n430 as Theme
const n431 = t([[12, 194],[13, 192],[14, 191],[15, 190],[16, 92],[17, 195],[18, 189],[19, 190],[20, 189],[21, 190],[22, 190],[23, 191],[24, 190],[25, 192],[26, 191],[27, 92]]) as Theme

export const dark_red_alt2_SliderTrackActive = n431 as Theme
const n432 = t([[12, 195],[13, 92],[14, 194],[15, 192],[16, 196],[17, 197],[18, 189],[19, 190],[20, 189],[21, 190],[22, 188],[23, 194],[24, 192],[25, 92],[26, 194],[27, 192]]) as Theme

export const dark_red_alt2_SliderThumb = n432 as Theme
export const dark_red_alt2_Tooltip = n432 as Theme
export const dark_red_alt2_ProgressIndicator = n432 as Theme
const n433 = t([[12, 194],[13, 92],[14, 195],[15, 196],[16, 192],[17, 191],[19, 92],[20, 195],[21, 92],[22, 92],[23, 92],[24, 195],[25, 194],[26, 92],[27, 190]]) as Theme

export const dark_red_active_Button = n433 as Theme
export const dark_red_active_Switch = n433 as Theme
const n434 = t([[12, 191],[13, 192],[14, 194],[15, 92],[16, 190],[17, 189],[19, 92],[20, 195],[21, 92],[22, 196],[23, 195],[24, 196],[25, 92],[26, 195],[27, 192]]) as Theme

export const dark_red_active_Checkbox = n434 as Theme
export const dark_red_active_Input = n434 as Theme
export const dark_red_active_TextArea = n434 as Theme
const n435 = t([[12, 192],[13, 191],[14, 190],[15, 189],[16, 194],[17, 92],[19, 191],[20, 190],[21, 191],[22, 191],[23, 190],[24, 189],[25, 191],[26, 190],[27, 195]]) as Theme

export const dark_red_active_SliderTrackActive = n435 as Theme