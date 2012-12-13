// elections.js
// By Michael Geary - http://mg.to/
// See UNLICENSE or http://unlicense.org/ for public domain notice.

var candidatesEG2012 = [
	// Candidate order must match the candidate-photos image for this election
  { color: '#E2FF00', id: '1', firstName: 'أبو العز', lastName: 'الحريرى', fullName: 'أبو العز الحريرى' },
  { color: '#718DC6', id: '2', firstName: 'محمد', lastName: 'عيسى', fullName: 'محمد عيسى' },
  { color: '#4EF50C', id: '3', firstName: 'حسام', lastName: 'خير الله', fullName: 'حسام خير الله' },
  { color: '#900AF7', id: '4', firstName: 'عمرو', lastName: 'موسى', fullName: 'عمرو موسى' },
  { color: '#FF6600', id: '5', firstName: 'عبد المنعم', lastName: 'أبو الفتوح', fullName: 'عبد المنعم أبو الفتوح' },
  { color: '#E2AA55', id: '6', firstName: 'هشام', lastName: 'البسطويسى', fullName: 'هشام البسطويسى' },
  { color: '#1006C7', id: '7', firstName: 'محمود', lastName: 'حسام', fullName: 'محمود حسام' },
  { color: '#9F1D35', id: '8', firstName: 'سليم', lastName: 'العوا', fullName: 'سليم العوا' },
  { color: '#FF38C6', id: '9', firstName: 'أحمد', lastName: 'شفيق', fullName: 'أحمد شفيق' },
  { color: '#006044', id: '10', firstName: 'حمدين', lastName: 'صباحى', fullName: 'حمدين صباحى' },	
  { color: '#0B65E3', id: '11', firstName: 'عبد الله', lastName: 'الأشعل', fullName: 'عبد الله الأشعل' },
  { color: '#9B6E0C', id: '12', firstName: 'خالد', lastName: 'على', fullName: 'خالد على' },
  { color: '#FF0000', id: '13', firstName: 'محمد', lastName: 'مرسى', fullName: 'محمد مرسى' }
];

var elections = {
  '2012-pres-1': {
    date: '2012-05-23',
    tzHour: +2,
    photos: true,
    candidates: candidatesEG2012,
    electionids: {
      'EG': 01
    }
  }
};
