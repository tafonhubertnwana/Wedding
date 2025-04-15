import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
} from '@react-email/components';
import * as React from 'react';

export const RsvpNotification = ({ name, email, attending, guests }) => {
  return (
    <Html>
      <Head />
      <Body style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f9fafb', padding: '20px' }}>
        <Container style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '32px', maxWidth: '600px', margin: 'auto', boxShadow: '0 0 10px rgba(0,0,0,0.05)' }}>
          <Heading style={{ fontSize: '20px', color: '#111827', marginBottom: '20px' }}>
            🎉 New Wedding RSVP
          </Heading>
          <Section style={{ marginBottom: '16px' }}>
            <Text style={{ fontSize: '16px', color: '#374151', marginBottom: '4px' }}>
              <strong>Name:</strong> {name}
            </Text>
            <Text style={{ fontSize: '16px', color: '#374151', marginBottom: '4px' }}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={{ fontSize: '16px', color: '#374151', marginBottom: '4px' }}>
              <strong>Will attend:</strong> {attending === 'yes' ? 'Yes 🎉' : 'No 😢'}
            </Text>
            {guests.length > 0 && guests.some(Boolean) && (
              <Text style={{ fontSize: '16px', color: '#374151' }}>
                <strong>Guest(s):</strong> {guests.filter(Boolean).join(', ')}
              </Text>
            )}
          </Section>

          <Section style={{ marginTop: '24px' }}>
            <Text style={{ fontSize: '14px', color: '#6b7280' }}>
              You received this RSVP via your wedding RSVP form.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default RsvpNotification;
