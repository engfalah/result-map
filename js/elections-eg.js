// elections.js
// By Michael Geary - http://mg.to/
// See UNLICENSE or http://unlicense.org/ for public domain notice.

var candidatesEG2012 = [
	// Candidate order must match the candidate-photos image for this election
  { color: '#006044', id: '1', fullName: 'موافق' },	
  { color: '#FF0000', id: '2', fullName: 'غير موافق' }
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
