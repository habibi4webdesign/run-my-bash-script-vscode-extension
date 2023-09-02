import { strict as assert } from 'assert';
import * as vscode from 'vscode';

suite('Extension Test Suite', () => {
    vscode.window.showInformationMessage('Starting all tests.');

    test('Array.indexOf() should return -1 for non-existent values', () => {
        assert.equal([1, 2, 3].indexOf(5), -1, 'Array contains value 5');
        assert.equal([1, 2, 3].indexOf(0), -1, 'Array contains value 0');
    });
});
