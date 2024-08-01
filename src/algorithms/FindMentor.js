

import { firestore } from '../firebase'; // Assuming Firebase is configured in the project

const findMentor = async (userId) => {
  try {
    // Fetch the user data
    const userRef = firestore.collection('users').doc(userId);
    const userDoc = await userRef.get();
    if (!userDoc.exists) {
      throw new Error('User not found');
    }
    const userData = userDoc.data();

    // Fetch all mentors
    const mentorsRef = firestore.collection('mentors');
    const mentorsSnapshot = await mentorsRef.where('availableForMentorship', '==', true).get();
    if (mentorsSnapshot.empty) {
      return []; // No mentors available
    }

    // Match mentors based on criteria
    const matchedMentors = [];
    mentorsSnapshot.forEach(doc => {
      const mentorData = doc.data();
      const skillMatchCount = mentorData.skills.filter(skill => userData.skills.includes(skill)).length;
      const isNear = userData.location === mentorData.location; // Simple location match
      const score = skillMatchCount + (isNear ? 1 : 0); // Example scoring system

      if (skillMatchCount > 0) {
        matchedMentors.push({ mentor: mentorData, score });
      }
    });

    // Sort mentors by match score in descending order
    matchedMentors.sort((a, b) => b.score - a.score);

    return matchedMentors.map(item => item.mentor); // Return sorted list of mentors
  } catch (error) {
    console.error('Error finding mentor:', error);
    return [];
  }
};

export default findMentor;
