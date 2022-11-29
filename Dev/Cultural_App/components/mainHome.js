import React, {useState, Component, createContext, useEffect} from 'react';
import {Linking} from 'react-native';
import {WebView} from 'react-native-webview';

import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Item,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
  Button,
} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {color} from 'react-native-reanimated';
import {Directions, State} from 'react-native-gesture-handler';
import culture from './information';
import scripts from '../js/scripts';

const mainHome = ({navigation}) => {
  const [searching, setsearchdata] = useState('');
  const [loding, setloding] = useState(true);
  const [data, setData] = useState([]);

  const informationUrl = 'http://192.168.86.159/capServer/detail/'; //데이터를 요청할 서버 주소

  // useEffect(() => {
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(json => setData(json))
  //     .catch(error => console.error(error))
  //     .finally(() => setloding(false));
  // }, []); //서버에 데이터를 요청하는 부분

  const namedata = [
    {key: '1', value: '이상설 생가'},
    {key: '2', value: '김덕순'},
    {key: '3', value: '농다리'},
    {key: '4', value: '화랑'},
    {key: '5', value: '길상사'},
  ];
  const culturdate1 = {
    1: '진천 이상설 생가(鎭川 李相卨 生家)는 충청북도 진천군 진천읍 산척리에 있는, 독립운동가인 이상설(1870∼1917) 선생의 생가이다. 1987년 3월 31일 충청북도의 기념물 제77호로 지정되었다. 독립운동가인 이상설(1870∼1917) 선생의 생가로, 선생은 충청북도 진천 출신이며 호는 보재이다. 선생은 이시영, 이규형 등과 신학문을 공부하였다. 을사보호조약이 체결된 후, 통분을 금치못해 길거리에서 연설한 후 집 밖에 나오지 않았다. 1907년 네덜란드 헤이그에서 열린 만국평화회의에 조선이 독립국임을 주장하는 고종의 밀서를 가지고 갔으나 뜻을 이루지 못했다. 조국의 국권회복을 위하여 노력하다가 1917년 연해주에서 생애를 마쳤다. 가옥은 앞면 3칸·옆면 1칸 규모로 흙벽돌로 쌓고 진흙으로 마감한 초가이다. 40여년 전에 무너졌던 것을 최근에 복원·수리하였다.',
    2: '1)정의\n 충청북도 진천에 묘가 있는 조선 전기의 효자. \n 2) 가계\n본관은 강릉(江陵). 자는 자수(字修), 호는 모암(慕庵). 아버지는 김천익(金天益)이며, 어머니는 김씨이다.\n3) 활동사항\n김덕숭(金德崇)[1373~1448]은 지금의 황해도 개성[옛 송도]에서 태어났다. 고려가 망하자 송도판윤으로 있던 아버지를 따라 지금의 진천군 백곡면 석현리 추자(楸子)마을에 정착하였다. 1393년(태조 2) 아버지의 뜻에 따라 출사하여 사헌부장령(司憲府掌令)을 비롯하여 여러 관직을 역임하다가 귀향하여 부모 봉양에 전력을 다했다. 1426년(세종 8) 한산군수에 제수되었으나, 팔십 노부모를 모시기 위해 석 달 만에 사직하고 향리로 돌아와 부모 봉양에만 힘썼다.\n어머니가 병환으로 자리에 누워 꿩고기를 먹고 싶다고 하자 당(堂)에 나가 산신께 기도를 올리니 꿩이 날아들었다. 그리고 엄동설한에 미나리와 잉어가 먹고 싶다고 하여 깊은 계곡으로 내려가 살펴보니 김이 서려 있는데도 싱싱한 미나리가 풍성하게 자라고 있어 따다가 드시게 했다. 또한 잉어를 구하기 위해 지금의 백곡저수지 아래 여계곡(女溪谷)으로 가서 얼음 위에 무릎을 꿇고 여러 날 기도를 한 끝에 앉은 자리가 녹아 생긴 구멍에서 잉어 두 마리가 뛰어 나왔다. 한 마리는 놓아 주고, 한 마리는 집으로 가져와 끓여 드렸더니 어머니의 병환이 씻은 듯이 나았다.\n김덕숭이 62세 되던 해 어머니가 84세로 세상을 뜨자 묘 옆에 여막을 짓고 애통해하면서 조석으로 상식을 올리고, 또한 집과 묘막을 오가면서 아버지를 봉양하며 삼년상을 치렀다. 복이 끝나고 집으로 돌아와서는 더욱 슬퍼하며 잠시도 아버지 곁을 떠나지 않았으며, 또 장모를 집에 맞아다가 어머니처럼 모셨다. 세종이 안질을 치료하기 위해 1444년 3월 초정(椒井)에 거둥하셨을 때 김덕숭의 효행을 듣고 술과 고기를 직접 하사하였으며, 충청감사로 하여금 술과 고기·쌀 열 가마를 특사하게 하였다. 이에 즉시 아버지와 왕을 배알하고 사은숙배하니 의복 한 벌씩을 또 하사하였다.\n이해 7월에 아버지가 돌아가시자 어머니와 합장하고 시묘를 하였다. 시묘를 하면서 잘 때도 요와 이불을 깔거나 덮지 않으며 밥을 먹지 않고 죽으로만 끼니를 연명하여 지팡이를 짚고서야 일어설 수 있었다. 주위에서 이를 말리자 “아비를 땅속에 묻어 놓고 집으로 돌아와 차마 먹을 수 없는 일이다. 더구나 내가 이미 양친을 잃고 나이 칠십이 넘었는데, 억지로 세상에 살아서 다시 누구를 위하겠는가. 비록 뫼 옆에서 죽더라도 한이 없다”며 새벽부터 밤중까지 시묘를 하였다. 1448년 76세의 나이로 세상을 떠났다.\n4) 묘소\n묘소와 신도비가 진천군 문백면 평산리 산5번지에 있다 평산리에서 진천읍으로 넘어가는 도로변 왼쪽 산자락 끝에 신도비가 있고, 뒷산 중턱에 묘소가 있다.\n5) 상훈과 추모\n이조참의(吏曹參議)에 증직되었고, 어제시(御製詩) 3수를 내려 정각을 건립하게 하였으며, 『삼강행실도(三綱行實圖)』에 효행을 기록하게 하였다. 1631년(인조 11) 이월면 사곡리에 효행을 기리기 위해 목조 기와 맞배지붕으로 사방 한 칸의 진천 김덕숭 효자각을 세웠다. 그리고 조선 전기의 문신 신잡(申磼)이 김덕숭을 추모하여 백원서원(白源書院)을 세워 제향하는 한편, 백곡저수지 근처 절벽 위에 백원정(白源亭)도 지었다고 한다. 현재 백원정은 진천군 진천읍 장관리 703-1번지에 있는데, 김덕숭의 21세손인 김동휘(金東輝)가 여계소(女溪沼) 동쪽 절벽 위에 다시 세운 것이다.',
    3: '충청북도 진천군 문백면에 위치한 옛 돌다리이다. 천년이 넘은 다리로 대한민국에서 가장 오래된 돌다리이다. 생김새가 특이하다.\n 오늘날에도 다리의 기능을 수행하고 있어 농다리를 통해 미호천을 건널 수 있다. 1976년 12월 21일 충청북도의 유형문화재 제28호로 지정되었다. 과거에는 농교(籠橋)라고 불렀으나 2013년 현재의 명칭으로 바뀌었다.',
    4: '1) 화랑 이야기의 출발\n신라 진흥왕 37년, 진지왕(眞智王) 원년 봄, 신라에서 화랑(花郞)을 설치하였다.\n 처음에 군신이 인재(人材)를 알아볼 수 없음을 근심하여, 같은 부류끼리 모으고 떼지어 놀게 하여 그 행의(行義)를 보아 쓰려고 하였다. 마침내 미녀(美女) 두 사람을 가려서 원화(源花)로 받들어 삼았는데, 하나는 남모(南毛)라 하고 하나는 준정(俊貞)이라 하였다. \n무리 3백여 인을 모아 어여쁨을다투고 서로 질투하였다. 준정이 자기 집에다 술을 준비해 놓고 남모에게 억지로 권하여 죽였다. 그 무리가 고하여 준정이 복주(伏誅)되고 마침내 원화를 폐하였다. 그 후 다시 미남자(美男子)를 뽑아 곱게 단장하여 ‘화랑(花郞)’이라 하였다.\n무리가 날로 많아져서혹은 도의(道義)를 서로 연마하고, 혹은 가악(歌樂)으로 서로 즐기며 \n산수(山水)를 유람하여먼 곳까지 가보지 않은 곳이 없었다. 세월이 이미 오래 되어 간사하고 정직함이 저절로 나타나자 그 중에서 예망(譽望)이 많은 자를 가려서 썼다. \n\n\n2)화랑의 기원과 변천\n1. 정의 : 신라 진흥왕(眞興王) 때에 인재(人材)를선발할목적으로만든 조직, \n또는 그에 소속된사람. \n2. 설치 시기 : 삼국사기에진흥왕37년(576)이라고 하지만불분명함. \n3. 기원 : 진흥왕때 설치된원화(源花),\n원화(原花)라고일컬어지는여성 우두머리가 낭도(郎徒)를거느린 조직\n4. 변천 : 진흥왕때 이들(원화) 사이에 분란이일어나자폐지, \n남성을 우두머리로 한 화랑 창설. 화랑(花郞) 혹은 화랑도(花郞徒)라함. \n신문왕(神門王) 때 김흠돌의난으로 일시 폐지,\n다시 국선(國仙)으로부활된뒤 신라 말까지계속됨. \n5. 조직 : 풍월주(風月主)•화랑(花郞)•낭두(郎頭)•낭도(郎徒) 등으로구성.\n각각의 위계 존재. \n- 화랑이 4-7명, 그를 따르는 낭도는 수천 명 정도였을 것으로 추정됨. \n- 김대문의‘화랑세기(花郞世紀)’\n/ 1대 위화랑부터 32대 신공까지 32명의 풍월주 기록됨\n6. 다른 이름 : 화랑들의우두머리가풍월주여서풍월(風月),풍월도(風月徒)라 함.\n선도(仙道)를따른다고 하여 국선도(國仙徒)라고도하였음.',
    5: '1. 길상사(김유신 장군의 영정을 모시고 있는 사당이다.)\n1) 길상사 개요\n진천 길상사(鎭川 吉祥祠)는 충청북도 진천군 진천읍에 있는, 김유신(595∼673) 장군의 영정을 모시고 있는 사당이다. 1975년 2월 21일 충청북도의 기념물 제1호로 지정되었다.삼국통일의 주역이였던 김유신(595∼673) 장군의 영정을 모시고 있는 사당이다. 김유신은 15세 때 화랑이 되었고, 무열왕 7년(660) 상대등이 되었다. 그 뒤 중국 당나라와 연합하여 백제를 멸망시키고 나당연합군의 대총관이 되어 고구려를 정벌하고 삼국통일(676)의 위업을 달성하였다.\n신라와 고려 때에는 장군이 태어난 태령산 아래 장군의 사당에서 봄과 가을로 제사를 지냈다. 그러나 조선에 들어와서 관리가 소홀하다가 임진왜란, 병자호란을 겪으면서 폐허가 된 것을 철종 2년(1851) 백곡면에 ‘죽계사’를 세워 장군의 영정을 모셨다. 고종 1년(1864)에는 흥선대원군의 서원 철폐령으로 헐렸는데 1926년 후손 김만희의 노력으로 지금 있는 자리에 길상사를 다시 세웠고, 1975년 정비하였다. 현재 이곳에는 장우성이 그린 그의 초상화와 흥무전, 흥무대왕신성비 등이 있다.',
  };
  const culturimage = {
    1: require('../image/isangsel.png'),
    2: require('../image/gimdagsun.png'),
    3: require('../image/brige.jpg'),
    4: require('../image/hwarang.png'),
    5: require('../image/gilsangsa.png'),
  };
  function searchdata2(key) {
    const textdaet2 = '';
    data.map(post => (textdaet2 = post.culturakdate[key]));
    return textdaet2;
  }
  function searchdata(key) {
    const textdate = culturdate1[key];
    return textdate;
  }
  function searchimage(key) {
    const imagedate = culturimage[key];
    return imagedate;
  }
  function findImageName(key) {
    return scripts[key];
  }

  return (
    <SafeAreaView style={styles.SafeAreaViewStyles}>
      <View style={styles.viewstyle}>
        <SelectList
          data={namedata}
          setSelected={setsearchdata}
          onSelect={() => alert(searching)}
        />
      </View>
      <View style={styles.middleviewstyle}>
        <SafeAreaView>
          <View>
            <Button
              title="내주위 문화재"
              style={styles.button}
              onPress={() => navigation.navigate('map')}
            />
            <Button
              title="상세 보기"
              style={styles.button}
              onPress={async () => {
                try {
                  if (findImageName(searching) == null) {
                    return alert('문화재를 선택하세요.');
                  }
                  const response = await fetch(
                    informationUrl + findImageName(searching),
                  );
                  const json = await response.json();
                  return navigation.navigate('information', {
                    information: json,
                  });
                } catch (err) {
                  alert(err);
                }
              }}
            />
          </View>
          <ScrollView style={styles.sideview}>
            {
              <Image
                style={styles.imagestyle}
                source={searchimage(searching)}
              />
            }
            {<Text>{searchdata(searching)}</Text>}
          </ScrollView>
        </SafeAreaView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewstyle: {
    paddingHorizontal: 10,
    paddingVertical: 50,
    height: '20%',
    flex: 0.2,
  },
  middleviewstyle: {
    flex: 1,
    marginTop: 0,
  },
  SafeAreaViewStyles: {
    flex: 1,
  },
  imagestyle: {
    height: 200,
    marginHorizontal: 20,
    marginTop: 10,
    width: '90%',
  },
  textsetting: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
  },
  button: {
    alignItems: 'center',
  },
  sideview: {
    width: '100%',
    height: '80%',
  },
});

export default mainHome;
