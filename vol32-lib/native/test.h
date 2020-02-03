#pragma once
#include "napi.h"

namespace test1
{

void InitTest1(Napi::Env env, Napi::Object exports);
Napi::Value test1(const Napi::CallbackInfo &info);

} // namespace test1
