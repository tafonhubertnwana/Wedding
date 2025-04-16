import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Img,
  Row,
  Column,
} from '@react-email/components';
import * as React from 'react';

export const RsvpNotification = ({ name, email, attending, guests }) => {
  return (
    <Html>
      <Head />
      <Body className="font-sans bg-purple-50">
        <Container className="bg-white rounded-lg shadow-lg overflow-hidden max-w-[600px] mx-auto my-8 border border-purple-100">
          {/* Header with gradient */}
          <Section className="bg-gradient-to-r from-amber-400 to-purple-500 py-6 px-8">
            <Row className="flex items-center">
              <Column>
                <Heading className="text-2xl font-serif font-bold text-white m-0">
                  Wedding RSVP Confirmation
                </Heading>
                <Text className="text-sm text-purple-100 mt-1">
                  You've received a new response
                </Text>
              </Column>
              <Column width={40}>
                <Img
                  src="https://cdn-icons-png.flaticon.com/512/411/411745.png"
                  width={40}
                  height={40}
                  alt="Wedding Rings"
                  className="float-right opacity-90"
                />
              </Column>
            </Row>
          </Section>

          {/* Main content */}
          <Section className="px-8 py-6">
            <Text className="text-lg text-purple-900 mb-6">
              Hello, you've received a new RSVP for your wedding!
            </Text>

            <div className="bg-purple-50 rounded-lg p-5 mb-6 border border-purple-100">
              <Text className="text-base text-purple-800 mb-3">
                <span className="font-medium text-purple-600 w-24 inline-block">Name:</span>
                <span className="text-purple-900 font-medium">{name}</span>
              </Text>
              <Text className="text-base text-purple-800 mb-3">
                <span className="font-medium text-purple-600 w-24 inline-block">Email:</span>
                <span className="text-purple-900">{email}</span>
              </Text>
              <Text className="text-base text-purple-800 mb-3">
                <span className="font-medium text-purple-600 w-24 inline-block">Attending:</span>
                <span className={attending === 'yes' ? 'text-amber-600 font-bold' : 'text-purple-600 font-medium'}>
                  {attending === 'yes' ? 'Yes, will attend 🎉' : 'Regretfully declines 😢'}
                </span>
              </Text>
              
              {guests.length > 0 && guests.some(Boolean) && (
                <div className="mt-4">
                  <Text className="font-medium text-purple-600 mb-2">Guest List:</Text>
                  <ul className="list-disc pl-5 space-y-1">
                    {guests.filter(Boolean).map((guest, index) => (
                      <li key={index} className="text-purple-800">
                        {guest}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <Text className="text-sm text-purple-500 mb-0">
              This response was submitted through your wedding RSVP form.
            </Text>
          </Section>

          {/* Footer */}
          <Section className="bg-gradient-to-r from-amber-50 to-purple-50 px-8 py-4 text-center border-t border-purple-100">
            <Text className="text-xs text-purple-400">
              Sent with ❤️ from your wedding website
            </Text>
            <div className="flex justify-center space-x-2 mt-2">
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            </div>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default RsvpNotification;