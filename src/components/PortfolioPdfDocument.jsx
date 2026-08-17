// src/components/PortfolioPdfDocument.jsx
import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from '@react-pdf/renderer';
import {
  heroData,
  aboutData,
  skillsData,
  servicesData,
  portfolioData,
  profileImage,
} from '../data/content.js';

const styles = StyleSheet.create({
  page: {
    padding: 36,
    backgroundColor: '#020617', // slate-950
    fontFamily: 'Helvetica',
    color: '#f8fafc',
  },
  
  /* Header Layout */
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1.5,
    borderBottomColor: '#06b6d4', // cyan-500
    paddingBottom: 16,
    marginBottom: 16,
  },
  headerContent: {
    flex: 1,
    paddingRight: 16,
  },
  avatar: {
    width: 68,
    height: 68,
    borderRadius: 34,
    borderWidth: 2,
    borderColor: '#06b6d4',
  },
  name: {
    fontSize: 22,
    fontFamily: 'Helvetica-Bold',
    color: '#ffffff',
    letterSpacing: -0.5,
  },
  title: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: '#22d3ee', // cyan-400
    marginTop: 3,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  summary: {
    fontSize: 8.5,
    color: '#94a3b8', // slate-400
    marginTop: 6,
    lineHeight: 1.4,
  },

  /* Contact Badges Grid */
  contactGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    backgroundColor: '#0f172a', // slate-900
    padding: 8,
    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: '#1e293b',
    marginBottom: 16,
  },
  contactItem: {
    fontSize: 7.5,
    color: '#cbd5e1',
  },
  contactLabel: {
    fontFamily: 'Helvetica-Bold',
    color: '#38bdf8',
  },

  /* Two-Column Grid Body */
  gridTwoCol: {
    flexDirection: 'row',
    gap: 16,
  },
  leftCol: {
    width: '38%',
  },
  rightCol: {
    width: '62%',
  },

  /* Section Titles */
  sectionTitle: {
    fontSize: 9.5,
    fontFamily: 'Helvetica-Bold',
    color: '#38bdf8', // sky-400
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: '#334155',
    paddingBottom: 3,
  },

  /* Skill Items & Progress Indicator */
  skillItem: {
    marginBottom: 7,
  },
  skillHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  skillName: {
    fontSize: 7.5,
    color: '#e2e8f0',
  },
  skillLevelText: {
    fontSize: 7,
    color: '#22d3ee',
  },
  progressBarBg: {
    height: 3,
    backgroundColor: '#1e293b',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#06b6d4',
  },

  /* Card Layouts */
  card: {
    backgroundColor: '#0f172a', // slate-900
    borderRadius: 5,
    padding: 8,
    marginBottom: 8,
    borderWidth: 0.5,
    borderColor: '#1e293b',
  },
  cardTitle: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: '#ffffff',
  },
  cardSubtitle: {
    fontSize: 7.5,
    color: '#06b6d4',
    marginTop: 1,
    marginBottom: 3,
  },
  cardText: {
    fontSize: 7.5,
    color: '#94a3b8',
    lineHeight: 1.35,
  },

  /* Tags */
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 3,
    marginTop: 5,
  },
  tag: {
    backgroundColor: '#1e293b',
    color: '#cbd5e1',
    fontSize: 6.5,
    paddingHorizontal: 4,
    paddingVertical: 1.5,
    borderRadius: 2,
  },

  /* Footer */
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 36,
    right: 36,
    textAlign: 'center',
    fontSize: 7,
    color: '#64748b',
    borderTopWidth: 0.5,
    borderTopColor: '#1e293b',
    paddingTop: 6,
  },
});

export const PortfolioPdfDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      
      {/* Top Header: Bio Info + Avatar */}
      <View style={styles.headerRow}>
        <View style={styles.headerContent}>
          <Text style={styles.name}>{heroData.name}</Text>
          <Text style={styles.title}>{heroData.title}</Text>
          <Text style={styles.summary}>{aboutData.summary}</Text>
        </View>
        {profileImage && (
          <Image src={profileImage} style={styles.avatar} />
        )}
      </View>

      {/* Quick Contact Bar */}
      <View style={styles.contactGrid}>
        {aboutData.fields.map((field, idx) => (
          <Text key={idx} style={styles.contactItem}>
            <Text style={styles.contactLabel}>{field.label}: </Text>
            {field.value}
          </Text>
        ))}
      </View>

      {/* Main Body */}
      <View style={styles.gridTwoCol}>
        
        {/* Left Side: Skills & Capabilities */}
        <View style={styles.leftCol}>
          <Text style={styles.sectionTitle}>Technical Skills</Text>
          {skillsData.map((skill, idx) => (
            <View key={idx} style={styles.skillItem}>
              <View style={styles.skillHeader}>
                <Text style={styles.skillName}>{skill.name}</Text>
                <Text style={styles.skillLevelText}>{skill.level}%</Text>
              </View>
              <View style={styles.progressBarBg}>
                <View style={[styles.progressBarFill, { width: `${skill.level}%` }]} />
              </View>
            </View>
          ))}

          <Text style={[styles.sectionTitle, { marginTop: 12 }]}>Specializations</Text>
          {servicesData.map((service, idx) => (
            <View key={idx} style={styles.card}>
              <Text style={styles.cardTitle}>{service.title}</Text>
              <Text style={styles.cardText}>{service.description}</Text>
            </View>
          ))}
        </View>

        {/* Right Side: Featured Engineering Works */}
        <View style={styles.rightCol}>
          <Text style={styles.sectionTitle}>Featured Projects</Text>
          {portfolioData.map((project, idx) => (
            <View key={idx} style={styles.card}>
              <Text style={styles.cardTitle}>{project.title}</Text>
              <Text style={styles.cardSubtitle}>{project.type}</Text>
              <Text style={styles.cardText}>{project.description}</Text>
              {project.tags && (
                <View style={styles.tagContainer}>
                  {project.tags.map((tag, tIdx) => (
                    <Text key={tIdx} style={styles.tag}>
                      {tag}
                    </Text>
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>

      </View>

      {/* Footer */}
      <Text style={styles.footer}>
        Generated directly from {heroData.name}'s Web Portfolio | Interactive CV Summary
      </Text>
    </Page>
  </Document>
);