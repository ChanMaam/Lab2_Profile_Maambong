"use client";
import React from 'react';
import { Text, StyleSheet, Image, View, TouchableOpacity, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfilePage = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [notifications, setNotifications] = React.useState(false);
  const [bio, setBio] = React.useState('This is my bio.');
  const [userName, setUserName] = React.useState('Christian');
  const [profileImage, setProfileImage] = React.useState(require('../assets/profpic.jpg'));

  const navigation = useNavigation();

  const handleSignOut = () => {
    alert('Signed out');
  };

  return (
    <View style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
      <View style={styles.profileSection}>
        <Image source={profileImage} style={styles.profileImage} />
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.joined}>Name</Text>
        <Text style={styles.bio}>{bio}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Profile</Text>
        <TouchableOpacity 
          style={styles.menuItem} 
          onPress={() => navigation.navigate('ManageProfile', { userName, setUserName, setProfileImage, profileImage, bio, setBio })}
        >
          <Text style={styles.menuText}>Manage Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Settings</Text>
        <View style={styles.menuItem}>
          <Text style={styles.menuText}>Notifications</Text>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{ true: '#007BFF', false: '#ccc' }}
          />
        </View>
        <View style={styles.menuItem}>
          <Text style={styles.menuText}>Dark Mode</Text>
          <Switch
            value={isDarkMode}
            onValueChange={setIsDarkMode}
            trackColor={{ true: '#007BFF', false: '#ccc' }}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  lightContainer: {
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    borderColor: '#ddd',
    borderWidth: 2,
  },
  userName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#007BFF',
  },
  joined: {
    color: '#777',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  section: {
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#007BFF',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  menuText: {
    fontSize: 16,
    color: '#333',
  },
  signOutButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  signOutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfilePage;
