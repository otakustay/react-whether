import * as React from 'react';
import {create} from 'react-test-renderer';
import {Whether, Match, Else} from '../src';

test('one branch matched', () => {
    const component = create(
        <Whether matches>
            <div />
        </Whether>,
    );

    expect(component.toJSON()).toMatchSnapshot();
});

test('one branch with multiple children', () => {
    const component = create(
        <Whether matches>
            <ul />
            <ol />
        </Whether>,
    );

    expect(component.toJSON()).toMatchSnapshot();
});

test('one branch not matched', () => {
    const component = create(
        <Whether matches={false}>
            <div />
        </Whether>,
    );

    expect(component.toJSON()).toMatchSnapshot();
});

test('one branch matched with function children', () => {
    const component = create(<Whether matches>{() => <div />}</Whether>);

    expect(component.toJSON()).toMatchSnapshot();
});

test('if and else when matched', () => {
    const component = create(
        <Whether matches>
            <div />
            <Else>
                <span />
            </Else>
        </Whether>,
    );

    expect(component.toJSON()).toMatchSnapshot();
});

test('if and else with multiple children matched', () => {
    const component = create(
        <Whether matches>
            <ul />
            <ol />
            <Else>
                <span />
            </Else>
        </Whether>,
    );

    expect(component.toJSON()).toMatchSnapshot();
});

test('if and else when not matched', () => {
    const component = create(
        <Whether matches={false}>
            <div />
            <Else>
                <span />
            </Else>
        </Whether>,
    );

    expect(component.toJSON()).toMatchSnapshot();
});

test('else with multiple children', () => {
    const component = create(
        <Whether matches>
            <div />
            <Else>
                <ul />
                <ol />
            </Else>
        </Whether>,
    );

    expect(component.toJSON()).toMatchSnapshot();
});

test('if and else when not matched with function children', () => {
    const component = create(
        <Whether matches={false}>
            <div />
            <Else>{() => <span />}</Else>
        </Whether>,
    );

    expect(component.toJSON()).toMatchSnapshot();
});

test('multiple match', () => {
    const component = create(
        <Whether context={3}>
            <Match selector={i => i < 1}>
                <span />
            </Match>
            <Match selector={i => i > 2}>
                <div />
            </Match>
        </Whether>,
    );

    expect(component.toJSON()).toMatchSnapshot();
});

test('match with multiple children', () => {
    const component = create(
        <Whether context={3}>
            <Match selector={i => i < 1}>
                <span />
            </Match>
            <Match selector={i => i > 2}>
                <ul />
                <ol />
            </Match>
        </Whether>,
    );

    expect(component.toJSON()).toMatchSnapshot();
});

test('multiple match when none matched', () => {
    const component = create(
        <Whether context={3}>
            <Match selector={i => i < 1}>
                <div />
            </Match>
            <Match selector={i => i < 2}>
                <span />
            </Match>
        </Whether>,
    );

    expect(component.toJSON()).toMatchSnapshot();
});

test('multiple match with else matched', () => {
    const component = create(
        <Whether context={3}>
            <Match selector={i => i < 1}>
                <div />
            </Match>
            <Else>
                <span />
            </Else>
        </Whether>,
    );

    expect(component.toJSON()).toMatchSnapshot();
});

test('match with function children', () => {
    const component = create(
        <Whether context={3}>
            <Match selector={i => i > 1}>{() => <div />}</Match>
            <Else>{() => <span />}</Else>
        </Whether>,
    );

    expect(component.toJSON()).toMatchSnapshot();
});

test('else with function children', () => {
    const component = create(
        <Whether context={3}>
            <Match selector={i => i < 1}>{() => <div />}</Match>
            <Else>{() => <span />}</Else>
        </Whether>,
    );

    expect(component.toJSON()).toMatchSnapshot();
});
