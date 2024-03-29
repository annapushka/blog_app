import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import Avatar from '@/shared/assets/tests/storybook.jpg';
import ProfileCard from './ProfileCard';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
);

const primaryARgs = {
  data: {
    first: 'Masha',
    lastname: 'Yagoda',
    age: 37,
    currency: Currency.GBP,
    country: Country.Azerbaijan,
    city: 'Saint P',
    username: 'admin',
    avatar: Avatar,
  },
};

export const Primary = Template.bind({});
Primary.args = primaryARgs;

export const PrimaryRedesigned = Template.bind({});
PrimaryRedesigned.args = primaryARgs;
PrimaryRedesigned.decorators = [NewDesignDecorator];

export const WithError = Template.bind({});
WithError.args = {
  error: 'Some error',
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
