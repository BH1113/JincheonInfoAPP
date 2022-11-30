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
import {imageName} from '../js/scripts';

const mainHome = ({navigation}) => {
  const [searching, setsearchdata] = useState('');
  const [loding, setloding] = useState(true);
  const [data, setData] = useState([]);

  const informationUrl = 'http://192.168.86.159/capServer/detail/'; //데이터를 요청할 서버 주소

  const namedata = [
    {key: '1', value: '이상설 생가'},
    {key: '2', value: '김덕순'},
    {key: '3', value: '농다리'},
    {key: '4', value: '화랑'},
    {key: '5', value: '길상사'},
    {key: '6', value: '연곡리 석비'},
    {key: '7', value: '진천 영수사 신중도'},
    {key: '8', value: '용화사 석조여래입상'},
    {key: '9', value: '정철 신도비'},
  ];
  const culturdate1 = {
    1: '진천 이상설 생가(鎭川 李相卨 生家)는 충청북도 진천군 진천읍 산척리에 있는, 독립운동가인 이상설(1870∼1917) 선생의 생가이다. \n1987년 3월 31일 충청북도의 기념물 제77호로 지정되었다.',
    2: '1)정의\n 충청북도 진천에 묘가 있는 조선 전기의 효자.\n김덕숭이 62세 되던 해 어머니가 84세로 세상을 뜨자 묘 옆에 여막을 짓고 애통해하면서 조석으로 상식을 올리고, 또한 집과 묘막을 오가면서 아버지를 봉양하며 삼년상을 치렀다.',
    3: '충청북도 진천군 문백면에 위치한 옛 돌다리이다. 천년이 넘은 다리로 대한민국에서 가장 오래된 돌다리이다.',
    4: '2)화랑의 기원과 변천\n1. 정의 : 신라 진흥왕(眞興王) 때에 인재(人材)를선발할목적으로만든 조직또는 그에 소속된사람. ',
    5: '1) 길상사 개요\n진천 길상사(鎭川 吉祥祠)는 충청북도 진천군 진천읍에 있는, 김유신(595∼673) 장군의 영정을 모시고 있는 사당이다. 1975년 2월 21일 충청북도의 기념물 제1호로 지정되었다.',
    6: ' 연곡리 석비는 거북받침돌과 이무기머릿돌을 갖춘 대형으로 각부의 조각이 뛰어나 이 사지 에 주재하던 어느 고승의 탑비로 조성되었을 것으로 추정된다. 이 비석은 조선시대 이전의 문헌에는 전혀 나타나지 않고, 일제강점기인 1932년에 간행된 진천지역의 지리서인 『상산지(常山誌)』에 처음으로 소개되어 있다. ',
    7: '신중정화(神衆幀畵)는 불교와 불교를 믿는 국가와 개인을 보호하고 수호하는 임무를 띤 화엄신중을 도설한 불화(佛畵)이다. 인도에서 불교 성립이전부터 있어 온 재래의 토속신(土俗神)을 불교의 신으로 받아들여 불교의 체계 속에 흡수하여 신중(神衆)이라 부르고 있다. 신중탱화는 불화의 성격을 규정짓는 상·중·하단의 삼단불화(三段佛畵) 가운데 중단에 위치한다.',
    8: ' 충청북도 진천군 진천읍 신정리에 있는 높이 7m의 커다란 불상으로 타원형의 얼굴에 은근한 미소가 보인다.\n머리 꼭지에는 벙거지 같은 것이 올려져 있는데 나중에 고친 것이 아닌가 생각된다. 목에는 3줄로 새겨진 삼도(三道)가 있고 그 아래에 표현된 목걸이 장식은 얼굴과 함께 불상을 돋보이게 하고 있다.',
    9: '신도비는 임금이나 고관의 평생업적을 기록하여 그의 무덤 입구에 세워두는 것으로, 이 비는 조선 중기의 문인이자 정치가이며 가사문학의 대가로 유명한 송강 정철(1536∼1593) 선생의 행적을 기리고 있다.',
  };
  const culturimage = {
    1: require('../image/isangsel.png'),
    2: require('../image/gimdagsun.png'),
    3: require('../image/brige.jpg'),
    4: require('../image/hwarang.png'),
    5: require('../image/gilsangsa.png'),
    6: require('../image/eyngokrisurbi.jpg'),
    7: require('../image/jinchensinjungdo.jpg'),
    8: require('../image/yonghwasa.jpg'),
    9: require('../image/sindobi.jpg'),
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
    return imageName[key];
  }

  return (
    <SafeAreaView style={styles.SafeAreaViewStyles}>
      <View style={styles.viewstyle}>
        <SelectList data={namedata} setSelected={setsearchdata} />

        <View style={styles.middleviewstyle}>
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
                  return navigation.navigate('culture', {
                    information: json,
                  });
                } catch (err) {
                  alert(err);
                }
              }}
            />
          </View>
          <ScrollView style={styles.scrollview}>
            {
              <Image
                style={styles.imagestyle}
                source={searchimage(searching)}
              />
            }
            {<Text>{searchdata(searching)}</Text>}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewstyle: {
    paddingHorizontal: 10,
    paddingVertical: 50,
    height: '100%',
    flex: 1,
  },
  middleviewstyle: {
    flex: 1,
    marginTop: 0,
    height: '60%',
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
    height: '60%',
  },
  scrollview: {
    height: '100%',
  },
  SafeAreaViewStyles2: {
    height: '100%',
    flex: 1,
  },
});

export default mainHome;
