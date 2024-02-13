import {
  Avatar,
  Box,
  Container,
  Flex,
  Group,
  Paper,
  Text,
  TypographyStylesProvider
} from '@mantine/core';

import classes from './CommentHtml.module.css';

const mocData = [
  {
    id: '1',
    src: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
    alt: 'Jacob Warnhalter',
    title: 'Jacob Warnhalter',
    timestemp: '10',
    description:
      'I use heroku.com to host my Node.js application, but MongoDB add-on appears to be too expensive I consider switching to digitalocean.com Digital Ocean VPS to save some cash.',
    link: ''
  },
  {
    id: '2',
    src: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
    alt: 'Jacob Warnhalter',
    title: 'Jacob Warnhalter',
    timestemp: '10',
    description:
      'I use heroku.com to host my Node.js application, but MongoDB add-on appears to be too expensive I consider switching to digitalocean.com Digital Ocean VPS to save some cash.',
    link: '',
    html: '<p>I use <a href="https://heroku.com/" rel="noopener noreferrer" target="_blank">Heroku</a> to host my Node.js application, but MongoDB add-on appears to be too <strong>expensive</strong>. I consider switching to <a href="https://www.digitalocean.com/" rel="noopener noreferrer" target="_blank">Digital Ocean</a> VPS to save some cash.</p>'
  },
  {
    id: '3',
    src: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
    alt: 'Jacob Warnhalter',
    title: 'Jacob Warnhalter',
    timestemp: '10',
    description:
      'I use heroku.com to host my Node.js application, but MongoDB add-on appears to be too expensive I consider switching to digitalocean.com Digital Ocean VPS to save some cash.',
    link: '',
    html: '<p>I use <a href="https://heroku.com/" rel="noopener noreferrer" target="_blank">Heroku</a> to host my Node.js application, but MongoDB add-on appears to be too <strong>expensive</strong>. I consider switching to <a href="https://www.digitalocean.com/" rel="noopener noreferrer" target="_blank">Digital Ocean</a> VPS to save some cash.</p>'
  }
];

const comments = mocData.map((moc) => (
  <Paper key={moc.id} w={450} withBorder radius="md" className={classes.comment}>
    <Group>
      <Avatar src={moc.src} alt={moc.alt} radius="xl" />
      <Box>
        <Text fz="sm">{moc.title}</Text>
        <Text fz="xs" c="dimmed">
          {`${moc.timestemp} minutes ago`}
        </Text>
      </Box>
    </Group>
    <TypographyStylesProvider className={classes.body}>
      <Text className={classes.content}>{moc.description}</Text>
    </TypographyStylesProvider>
  </Paper>
));

export function CommentHtml() {
  return (
    <Container>
      <Flex className={classes.commentsWrapper}>{comments}</Flex>
    </Container>
  );
}
