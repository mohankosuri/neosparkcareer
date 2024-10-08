import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import icons

const jobs = [{"id":1,"role":"Registered Nurse","company":"Rhynoodle","experience":"4-5 yrs","location":"Trondheim","package":"Krone","skills":["MongoDB","Cloud","React","Node.js","Core Java"],"description":"Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.","postedOn":"1/11/2022","OpportunityType":"Contract","Status":"active","time":"4d ago"},
{"id":2,"role":"Analog Design manager","company":"Thoughtbridge","experience":"4-5 yrs","location":"Xihu","package":"Yuan Renminbi","skills":[".net","Cloud","Mango DB","MongoDB","Node.js","React","Core Java"],"description":"Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.","postedOn":"2/27/2024","OpportunityType":"Internship","Status":"active","time":"1d ago"},
{"id":3,"role":"Research Associate","company":"Twimm","experience":"4-5 yrs","location":"Lewolang","package":"Rupiah","skills":["React","Cloud","MongoDB","Mango DB",".net","Core Java"],"description":"Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.","postedOn":"12/12/2024","OpportunityType":"Internship","Status":"active","time":"30ds ago"},
{"id":4,"role":"Nuclear Power Engineer","company":"Voolith","experience":"1-2 yrs","location":"Oak Bay","package":"Dollar","skills":["Node.js","Mango DB",".net"],"description":"Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.","postedOn":"3/27/2022","OpportunityType":"Internship","Status":"active","time":"5d ago"},
{"id":5,"role":"Software Consultant","company":"Edgetag","experience":"2-3 yrs","location":"Lille","package":"Euro","skills":["React","Mango DB"],"description":"Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.","postedOn":"11/13/2022","OpportunityType":"Contract","Status":"active","time":"8d ago"},
{"id":6,"role":"Research Nurse","company":"Cogilith","experience":"2-3 yrs","location":"Papelón","package":"Bolivar","skills":["MongoDB",".net","Mango DB"],"description":"Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.","postedOn":"8/7/2024","OpportunityType":"Internship","Status":"active","time":"6d ago"},
{"id":7,"role":"VP Accounting","company":"Yata","experience":"4-5 yrs","location":"Kabin Buri","package":"Baht","skills":["React",".net"],"description":"In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.","postedOn":"10/9/2023","OpportunityType":"Full Time","Status":"active","time":"4d ago"},
{"id":8,"role":"Business Analyst","company":"Abata","experience":"4-5 yrs","location":"Skene","package":"Krona","skills":["Core Java"],"description":"Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.","postedOn":"7/19/2023","OpportunityType":"Contract","Status":"active","time":"3d ago"},
{"id":9,"role":"Account Executive","company":"Thoughtbeat","experience":"5+ yrs","location":"San Isidro","package":"Peso","skills":["Mango DB"],"description":"Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.","postedOn":"5/17/2022","OpportunityType":"Internship","Status":"active","time":"9d ago"},
{"id":10,"role":"Outreach Specialist","company":"Yamia","experience":"4-5 yrs","location":"Huilong","package":"Yuan Renminbi","skills":["Node.js","Core Java",".net","MongoDB","Mango DB","Cloud"],"description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.","postedOn":"4/23/2022","OpportunityType":"Internship","Status":"active","time":"6d ago"},
{"id":11,"role":"Technical Writer","company":"Yotz","experience":"2-3 yrs","location":"Voskhod","package":"Hryvnia","skills":["React","Core Java","Cloud"],"description":"Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.","postedOn":"12/3/2023","OpportunityType":"Part Time","Status":"active","time":"8d ago"},
{"id":12,"role":"Media Manager I","company":"Kanoodle","experience":"0-1 yrs","location":"Springfield","package":"Dollar","skills":["Node.js"],"description":"Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.","postedOn":"11/10/2024","OpportunityType":"Full Time","Status":"active","time":"2d ago"},
{"id":13,"role":"Therapy Assistant","company":"Aibox","experience":"3-4 yrs","location":"Verkhozim","package":"Ruble","skills":[".net","React","Mango DB","Node.js"],"description":"Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.","postedOn":"9/21/2022","OpportunityType":"Full Time","Status":"active","time":"7d ago"},
{"id":14,"role":"Social Worker","company":"Kwimbee","experience":"4-5 yrs","location":"Porto Seguro","package":"Real","skills":["Node.js","Core Java"],"description":"Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.","postedOn":"11/14/2024","OpportunityType":"Contract","Status":"active","time":"4d ago"},
{"id":15,"role":"Professor","company":"Dynabox","experience":"5+ yrs","location":"Calvinia","package":"Rand","skills":["Cloud","Mango DB","Core Java"],"description":"Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.","postedOn":"2/1/2024","OpportunityType":"Internship","Status":"active","time":"2d ago"},
{"id":16,"role":"Accounting Analyst IV","company":"Wikizz","experience":"4-5 yrs","location":"‘Attīl","package":"Shekel","skills":["Mango DB",".net","MongoDB","Core Java","Cloud"],"description":"Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.","postedOn":"6/24/2023","OpportunityType":"Part Time","Status":"active","time":"2d ago"},
{"id":17,"role":"Compensation Analyst","company":"Jamia","experience":"2-3 yrs","location":"Negotino","package":"Denar","skills":["MongoDB","Node.js","React",".net","Cloud"],"description":"Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.","postedOn":"9/24/2023","OpportunityType":"Contract","Status":"active","time":"5d ago"},
{"id":18,"role":"Professor","company":"Thoughtstorm","experience":"4-5 yrs","location":"Beppu","package":"Yen","skills":["Node.js","Core Java","Mango DB"],"description":"Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.","postedOn":"11/4/2025","OpportunityType":"Internship","Status":"active","time":"7d ago"},
{"id":19,"role":"Programmer I","company":"Twimm","experience":"0-1 yrs","location":"Bollnäs","package":"Krona","skills":["React"],"description":"In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.","postedOn":"1/25/2024","OpportunityType":"Full Time","Status":"active","time":"6d ago"},
{"id":20,"role":"Civil Engineer","company":"Roodel","experience":"0-1 yrs","location":"Iporá","package":"Real","skills":[".net","Node.js","Cloud","Mango DB","MongoDB","React"],"description":"Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.","postedOn":"1/22/2022","OpportunityType":"Part Time","Status":"active","time":"2d ago"}];

const JobListScreen = () => {
  const navigation: any = useNavigation();

  const handleCardPress = (job: any) => {
    navigation.navigate('JobDetail', { job });  
  };

  return (
    <ScrollView style={{ backgroundColor: '#ffffff' }}>
      {jobs.map((job) => (
        <TouchableOpacity key={job.id} onPress={() => handleCardPress(job)} style={styles.container}>
          <View style={styles.header}>
            <View>
              <View style={styles.iconTextContainer}>
                <Icon name="work" size={20} color="#6a1b9a" style={styles.icon} />
                <Text style={styles.jobTitle}>{job.role}</Text>
              </View>
              <View style={styles.iconTextContainer}>
                <Icon name="timer" size={20} color="#6a1b9a" style={styles.icon} />
                <Text style={styles.detailText}>Experience: {job.experience}</Text>
              </View>
              <View style={styles.iconTextContainer}>
                <Icon name="location-pin" size={20} color="#6a1b9a" style={styles.icon} />
                <Text style={styles.detailText}>Location: {job.location}</Text>
              </View>

              <View className='mt-4'>
                <Text className='text-sm font-bold'>{job.time}</Text>
            </View>

            </View>
           

            {/* Status Indicator */}
            <View style={[styles.statusContainer, job.Status === 'active' ? styles.active : styles.inactive]}>
              <Icon name={job.Status === 'active' ? 'check-circle' : 'cancel'} size={20} color="#fff" />
              <Text style={styles.statusText}>{job.Status === 'active' ? 'Active' : 'Inactive'}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    margin: 10,
    borderColor: '#e0e0e0',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  icon: {
    marginRight: 5,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#6a1b9a',
  },
  detailText: {
    fontSize: 14,
    color: '#6a1b9a',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  statusText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  active: {
    backgroundColor: 'green',
  },
  inactive: {
    backgroundColor: 'red',
  },
});

export default JobListScreen;
