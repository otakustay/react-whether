import {Whether, Match, Else} from '../dist';
import renderer from 'react-test-renderer';

test('[ts] one branch matched', () => {
    const component = renderer.create(
        <Whether matches={true}>
            <div />
        </Whether>
    );

    expect(component.toJSON()).toMatchSnapshot();
});

test('[ts] one branch with multiple children', () => {
    const component = renderer.create(
        <Whether matches={true}>
            <ul />
            <ol />
        </Whether>
    );

    expect(component.toJSON()).toMatchSnapshot();
});

test('[ts] one branch not matched', () => {
    const component = renderer.create(
        <Whether matches={false}>
            <div />
        </Whether>
    );

    expect(component.toJSON()).toMatchSnapshot();
});

test('[ts] one branch matched with function children', () => {
    const component = renderer.create(
        <Whether matches={true}>
            {() => <div />}
        </Whether>
    );

    expect(component.toJSON()).toMatchSnapshot();
});

test('[ts] if and else when matched', () => {
    const component = renderer.create(
        <Whether matches={true}>
            <div />
            <Else>
                <span />
            </Else>
        </Whether>
    );

    expect(component.toJSON()).toMatchSnapshot();
});

test('[ts] if and else with multiple children matched', () => {
    const component = renderer.create(
        <Whether matches={true}>
            <ul />
            <ol />
            <Else>
                <span />
            </Else>
        </Whether>
    );

    expect(component.toJSON()).toMatchSnapshot();
});

test('[ts] if and else when not matched', () => {
    const component = renderer.create(
        <Whether matches={false}>
            <div />
            <Else>
                <span />
            </Else>
        </Whether>
    );

    expect(component.toJSON()).toMatchSnapshot();
});

test('[ts] else with multiple children', () => {
    const component = renderer.create(
        <Whether matches={true}>
            <div />
            <Else>
                <ul />
                <ol />
            </Else>
        </Whether>
    );

    expect(component.toJSON()).toMatchSnapshot();
});

test('[ts] if and else when not matched with function children', () => {
    const component = renderer.create(
        <Whether matches={false}>
            <div />
            <Else>
                {() => <span />}
            </Else>
        </Whether>
    );

    expect(component.toJSON()).toMatchSnapshot();
});

test('[ts] multiple match', () => {
    const component = renderer.create(
        <Whether context={3}>
            <Match selector={i => i < 1}>
                <span />
            </Match>
            <Match selector={i => i > 2}>
                <div />
            </Match>
        </Whether>
    );

    expect(component.toJSON()).toMatchSnapshot();
});

test('[ts] match with multiple children', () => {
    const component = renderer.create(
        <Whether context={3}>
            <Match selector={i => i < 1}>
                <span />
            </Match>
            <Match selector={i => i > 2}>
                <ul />
                <ol />
            </Match>
        </Whether>
    );

    expect(component.toJSON()).toMatchSnapshot();
});

test('[ts] multiple match when none matched', () => {
    const component = renderer.create(
        <Whether context={3}>
            <Match selector={i => i < 1}>
                <div />
            </Match>
            <Match selector={i => i < 2}>
                <span />
            </Match>
        </Whether>
    );

    expect(component.toJSON()).toMatchSnapshot();
});

test('[ts] multiple match with else matched', () => {
    const component = renderer.create(
        <Whether context={3}>
            <Match selector={i => i < 1}>
                <div />
            </Match>
            <Else>
                <span />
            </Else>
        </Whether>
    );

    expect(component.toJSON()).toMatchSnapshot();
});

test('[ts] match with function children', () => {
    const component = renderer.create(
        <Whether context={3}>
            <Match selector={i => i > 1}>
                {() => <div />}
            </Match>
            <Else>
                {() => <span />}
            </Else>
        </Whether>
    );

    expect(component.toJSON()).toMatchSnapshot();
});

test('[ts] else with function children', () => {
    const component = renderer.create(
        <Whether context={3}>
            <Match selector={i => i < 1}>
                {() => <div />}
            </Match>
            <Else>
                {() => <span />}
            </Else>
        </Whether>
    );

    expect(component.toJSON()).toMatchSnapshot();
});
